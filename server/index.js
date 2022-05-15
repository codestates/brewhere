require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const controllers = require("./controllers");

app.use(express.json());

app.use(
  cors({
    origin: ["https://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);

app.use(cookieParser());
app.post("/signup", controllers.signup);
app.post("/login", controllers.login);
app.post("/username", controllers.username);
app.get("/logout", controllers.logout);
app.get("/mypage", controllers.mypage);
app.get("/:breweryid", controllers.breweryList);
app.patch("/password", controllers.password);
app.delete("/withdrawal", controllers.withdrawal);

const HTTPS_PORT = process.env.HTTPS_PORT || 3000;

let server;
if(fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")){

  const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8");
  const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8");
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log("server runnning"));

} else {
  server = app.listen(HTTPS_PORT)
}
module.exports = server;