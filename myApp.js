let express = require('express');
let app = express();
const mySecret = process.env['MESSAGE_STYLE']

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// })

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
})

app.get("/json", (req, res) => {
  const resText = "Hello json"
  res.json({
    "message": process.env.MESSAGE_STYLE === "uppercase" ? resText.toUpperCase() : resText
    });
})





console.log("Hello World")


































 module.exports = app;
