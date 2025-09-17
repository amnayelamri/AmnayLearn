


  let intervalId = null;

  // Function to generate a random color
 
  function getRandomColor() {
  const colors = ["red", "blue", "black", "green"];
  return colors[Math.floor(Math.random() * colors.length)];
}




  // Function to toggle background color changing
  document.getElementById("bg-toggle").addEventListener("click", changeColorRandom)
  
  
  function changeColorRandom () {
    if (intervalId === null) {
      // Start background changing every 3 seconds
      intervalId = setInterval(() => {
        document.querySelector("#simplecolor").style.backgroundColor = getRandomColor();
       
      }, 1000);
    } else {
      // Stop background changing
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  
        
  

