const http=require('http')
const fs=require('fs')
const port=33;
const host="127.5.5.1";
const server=http.createServer(function(req,res){
    if(req.url=="/"){
        fs.readFile('Home.html',function(error,data){
            res.writeHead(200,{"content-type":"text/html"})
            res.write(data)
            res.end()


        })
    }
   
   else if(req.url=="/about"){
        fs.readFile('About.html',function(error,data){
            res.writeHead(200,{"content-type":"text/html"})
            res.write(data)
            res.end()


        })
    }
        else{
            fs.readFile('error.html',function(error,data){
                res.writeHead(404,{"content-type":"text/html"})
                res.write(data)
                res.end()
    
    
            })
    }



})
server.listen(port,host,function(){
    console.log(`${host}:${port}`)
});