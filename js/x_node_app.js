/************************
memoryleak
app.js
last update: 26/08/2018
*************************/

//include the core http node module
const http = require('http');

//include the file system module that allows html pages to be displayed
const fs = require('fs');

const hostname = '192.168.0.5';
const port = 3000;

fs.readFile('../index.html', (err, html) => {
   if(err){
      throw err;
   }
   
      const server = http.createServer((req, res) => {
      res.statusCode = 200; //200 means everything ok
      res.setHeader('Content-type', 'text/html');
      res.write(html);
      res.end(); 
   });


   server.listen(port, hostname, () => {
      console.log('Server started on port '+port);
   });
});
