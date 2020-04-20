const express = require("express");
const app = express();

app.use(express.static("css"));
app.use(express.static("vendor"));
app.use(express.static("vendor/bootstrap/css"));
app.use(express.static("vendor/bootstrap/js"));
app.use(express.static("vendor/jquery"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/index.html", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/COMMANDS.html", (request, response) => {
  response.sendFile(__dirname + "/COMMANDS.html");
});

app.get("*", (request, response) => {
  response.sendFile(__dirname + "/404.html");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
