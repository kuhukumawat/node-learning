
const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
    if (url === "/") {
      res.write("<html>");
      res.write("<head><title>Enter A Message</title></head>");
      res.write(
        '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Sumbit</button></input></form></body>'
      );
      res.write("</html>");
      return res.end();
    }
    if (url === "/user") {
        res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><ul><li>User1</li><li>User2</li><li>User3</li><li>User4</li></ul></body>");
    res.write("</html>");
    res.end();
        }
    if (url === "/create-user" && req.method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk)
      });
      req.on("end", () => {
        const parsedData = Buffer.concat(body).toString();
        console.log(parsedData)
        const message = parsedData.split("=")[1];
        console.log(message)
        fs.writeFile("message.txt", message, () => {
            res.statusCode = 302;
            res.setHeader("Location", "/");
            res.end(); 
          });
        });
    
        return; 
      }
    
    
     
    
    // process.exit();
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello Welcome to the page</h1></body>");
    res.write("</html>");
    res.end();
    };
// const requestHandler = (req, res) => {
// const url = req.url;
// if (url === "/") {
//   res.write("<html>");
//   res.write("<head><title>Enter A Message</title></head>");
//   res.write(
//     '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>'
//   );
//   res.write("</html>");
//   return res.end();
// }
// if (url === "/message" && req.method === "POST") {
//   const body = [];
//   req.on("data", (chunk) => {
//     console.log(chunk);
//     body.push(chunk)
//   });
//   req.on("end", () => {
//     const parsedData = Buffer.concat(body).toString();
//     const message = parsedData.split("=")[1];
//     fs.writeFile("message.txt", message, () => {
//         res.statusCode = 302;
//         res.setHeader("Location", "/");
//         res.end(); 
//       });
//     });

//     return; 
//   }


 

// // process.exit();
// res.setHeader("Content-Type", "text/html");
// res.write("<html>");
// res.write("<head><title>My First Page</title></head>");
// res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
// res.write("</html>");
// res.end();
// };
module.exports = requestHandler;

// module.exports = requestHandler;

// we can export multiple
// module.exports.handler=requestHandler;
// module.exports.someText="Some hard coded text";


// module.exports={
//     handler:requestHandler,
//     someText:"Some hard coded text"
// }

// exports.handler=requestHandler;
// exports.someText="Some hard coded text";