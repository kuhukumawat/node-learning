// const http = require("http");

// const { Buffer } = require("buffer");
// const crypto = require("crypto");

// const server = http.createServer((req, res) => {
//     if (req.url === "/buffer") {
//     // const buf= Buffer.alloc(10 , 'A' ,'utf-8')
//     // const buf= Buffer.from('Hello This is komal')

//     //slice
//     // const buf= Buffer.from('Hello This is komal');
//     // const sliceBuf=buf.slice(0,8)
//     // const length=buf.length;

//     //write

// // const buf=Buffer.alloc(5);
// // const bufWrite=buf.write('komal',0 ,5 ,'utf8')

// //     console.log(bufWrite)
// //         res.end(bufWrite.toString());
// //     } else {
// //         routes(req, res); // Handle other routes
// //     }
// // });

// //compare

// // const buf1=Buffer.from('komal k');
// // const buf2=Buffer.from('komal kumawat');
// // const compareBuf=Buffer.compare(buf1,buf2)
// // console.log(compareBuf)
// // res.end(compareBuf.toString());

// //concat
// // const buf=Buffer.alloc(5);
// // const buf1=Buffer.from('ABC');
// // const buf2=Buffer.from('komal kumawat');
// // const compareBuf=Buffer.concat([buf1,buf2])
// // console.log(compareBuf)

// //encode
// // const encodeBuf = compareBuf.toString('base64');
// // const encodeBuf = compareBuf.toString('hex');
// // console.log(encodeBuf);
// //reads unsigned 8-bit int

// // const value = buf1.readUInt8(0);
// // console.log(value)

// //writes(value,offset)
// // buf.writeUInt8(65, 0); // 'A'
// // buf.writeUInt8(66, 1); // 'B'

// // Convert buffer to a string
// // const bufferText = buf.toString().replace(/\0/g, ""); // Remove NULL characters

// // console.log("Final Buffer String:", bufferText);

// // // Set correct Content-Type header

// const randomBytes = crypto.randomBytes(10); // Generate random bytes
// const bufferText = randomBytes.toString("hex"); // Convert buffer to hex string

// console.log(bufferText); // Log for debugging

// // Set proper headers
// res.writeHead(200, {
//     "Content-Type": "text/plain; charset=utf-8", // Ensure text display
//     "Content-Disposition": "inline" // Prevent forced download
// });

// // Send the response as a string
// res.end(bufferText);

// } else {
//     routes(req, res); // Handle other routes
// }
// });

// server.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });

//express & middleware

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoute=require('./routes/admin')
const shopRoute=require('./routes/shop')
const path=require('path')
const rootDir=require('./util/path')

// Middleware function (logs every request)
// app.use((req, res, next) => {
//     console.log(`Request received`);
//     next();
// });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir,'public')))
app.set('view engine', 'pug');
app.set('views', 'views')

app.use(shopRoute)
app.use(adminRoute.routes)
app.use((req, res, next) => {
    res.status(404).render('not-found',{notFoundTitle:'404 Not Found'});
});


app.listen(3000, () => console.log("Server running on port 3000"));
