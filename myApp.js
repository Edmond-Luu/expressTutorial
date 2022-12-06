let express = require('express');
let app = express();
const mySecret = process.env['MESSAGE_STYLE']

app.use(function middleware(req, res, next){
  console.log(`${req.method} ${req.path} - ${req.ip}"`)
  next();
});


// app.get("/", (req, res) => {
//   res.send("Hello Express");
// })


app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  const resText = "Hello json"
  res.json({
    "message": process.env.MESSAGE_STYLE === "uppercase" ? resText.toUpperCase() : resText
    });
});

app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
},
       (req, res) => {
         res.send({
           time: req.time
         })
       })

console.log("Hello World")


































 module.exports = app;
