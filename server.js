const http = require('http');
const fs = require('fs');
const _= require('lodash');

const server = http.createServer((req,res) => {
    const num = _.random(0,5);
    console.log(num);
    //console.log(req.url,req.method);
    res.setHeader('Content-Type','text/html');
    let path='./views/';
    switch(req.url)
    {
        case '/': 
          path+= 'index.html';
          res.statusCode=202;
          break;
        case '/about': 
           path+= 'about.html';
           res.statusCode=201;
           break;
        case '/about-us': 
           res.statusCode=301;
           res.setHeader('Location','/about');
           res.end();
           break; 
        default:
           path+='404.html';
           res.statusCode=404;
           break;         
    }

    fs.readFile(path,(err,data)=>{ 
        if(err){
        console.log(err)
        res.end();  
        }
        else{
        res.end(data);
        }
    })
    
})
server.listen(3001,()=>{
    console.log('port chal gya')
});
