let express = require('express'); 
let app = express(); 
const controllers = require("./controllers");
// const usersRouter = require('./router/usersRouter.js');

app.get('/', function(req, res) { 
  res.send('Hello World!'); 
});

app.post("/signup", controllers.signup);
app.post("/login", controllers.login);
app.post("/username", controllers.username);
app.get("/logout", controllers.logout);
app.get("/mypage", controllers.mypage);
app.patch("/password", controllers.password);
app.delete("/withdrawal", controllers.withdrawal);

// app.use('/users', usersRouter);

let port = 3000; 
app.listen(port, function(){ 
  console.log('server on! http://localhost:'+port); 
});