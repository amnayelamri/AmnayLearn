import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { documentAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { FiSearch, FiBook, FiUser, FiClock, FiHeart } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const [documents, setDocuments] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    fetchDocuments();
  }, [search]);

  const fetchDocuments = async () => {
    try {
      const response = await documentAPI.getAll(search);
      setDocuments(response.data);
    } catch (error) {
      console.error('Error fetching documents:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleDocumentClick = (id) => {
    navigate(`/document/${id}`);
  };

  const handleLike = async (e, docId) => {
    e.stopPropagation(); // Prevent navigation when clicking like
    
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      const response = await documentAPI.like(docId);
      
      // Update the document in state
      setDocuments(documents.map(doc => 
        doc._id === docId 
          ? { ...doc, likes: response.data.document.likes }
          : doc
      ));
    } catch (error) {
      console.error('Error liking document:', error);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isLikedByUser = (doc) => {
    if (!user || !doc.likes) return false;
    return doc.likes.includes(user.id);
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Explore Documents</h1>
        <p className="subtitle">Discover knowledge shared by the community</p>
      </div>

      <div className="search-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search documents..."
          value={search}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {loading ? (
        <div className="loading">Loading documents...</div>
      ) : documents.length === 0 ? (
        <div className="empty-state">
          <FiBook size={64} />
          <h3>No documents found</h3>
          <p>Be the first to create a document!</p>
        </div>
      ) : (
        <div className="documents-grid">
          {documents.map((doc) => (
            <div
              key={doc._id}
              className="document-card"
              onClick={() => handleDocumentClick(doc._id)}
            >
              <div className="document-icon">
                <FiBook size={32} />
              </div>
              <h3>{doc.title}</h3>
              {doc.description && (
                <p className="document-description">{doc.description}</p>
              )}
              <div className="document-meta">
                <span className="meta-item">
                  <FiUser size={14} />
                  {doc.author?.name || 'Anonymous'}
                </span>
                <span className="meta-item">
                  <FiClock size={14} />
                  {formatDate(doc.createdAt)}
                </span>
              </div>
              <div className="document-footer">
                <button
                  className={`like-button ${isLikedByUser(doc) ? 'liked' : ''}`}
                  onClick={(e) => handleLike(e, doc._id)}
                >
                  <FiHeart size={16} />
                  <span>{doc.likes?.length || 0}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;