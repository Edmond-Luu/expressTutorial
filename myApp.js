let express = require('express');
const bodyParser = require('body-parser');
let app = express();
const mySecret = process.env['MESSAGE_STYLE']

app.use(function middleware(req, res, next){
  console.log(`${req.method} ${req.path} - ${req.ip}"`)
  next();
});

app.use(bodyParser.urlencoded({extended: false}));


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

app.get("/:word/echo", (req, res) => {
  const {word} = req.params
  res.json({
    echo: word
  })
})

app.get("/name", (req, res) => {
  const {first, last} = req.query;
  res.json({
    name: first + " " + last
  })
})

app.post("/name", (req, res) => {
  const name = req.body.first + " " + req.body.last;
  res.json({
    name
  })
})

console.log("Hello World")


































 module.exports = app;
