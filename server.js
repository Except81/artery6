const express = require('express')
const app = express()

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.static(__dirname + 'public'));

app.get('/', function(req, res) {
  res.render('index.ejs')
})
  
app.listen(8080, () => {console.log('ready!')})