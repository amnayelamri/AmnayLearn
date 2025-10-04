const http=require("http")
const fs =require('fs')
http.createServer((req,res)=>{
    fs.readFile('jour17.html',(err,data)=>{
    res.writeHead(200,{'content-Type':'text/html'})
    res.write(data)
    res.end()
})
}).listen(8000)