const express = require("express");
const bodyParsor = require("body-parser");
const app = express();
const apiRoute = require("./routes/api");


app.use(bodyParsor.json());
app.use('/api', apiRoute);
app.listen(8100, () => console.log("Node Server run on port 8100!"));
app.get("/", function(req, res) {
  res.send("Hello I am from Server!!");
});










// echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
// 69DKQFf6mOKCEGBO
