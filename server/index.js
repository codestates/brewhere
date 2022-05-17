let express = require('express'); 
let app = express(); 
const controllers = require("./controllers");
const usersRouter = require('./router/usersRouter.js');
const breweryRouter = require('./router/breweryRouter.js');
const mypageRouter = require('./router/mypageRouter.js');

const morgan = require('morgan');
const path = require('path');

const { sequelize } = require('./models');
//데이터 베이스 연결을 위해 추가


app.get('/', function(req, res) { 
  res.send('Hello World!'); 
});

sequelize.sync({ force: false})
  .then(() => {
    console.log('데이터베이스 연결 성공')
  })
  .catch((err) => {
    console.error(err)
  })
  //데이터베이스 연결 위해 추가

app.post("/signup", controllers.signup);
app.post("/login", controllers.login);
app.post("/username", controllers.username);
app.get("/logout", controllers.logout);
app.get("/mypage", controllers.mypage);
app.patch("/password", controllers.password);
app.delete("/withdrawal", controllers.withdrawal);

app.use('/users', usersRouter);
app.use('/:breweryid', breweryRouter);
app.use('/mypage', mypageRouter);

let port = 8080;
//포트 겹치지 않기 위해 임시 변경 
app.listen(port, function(){ 
  console.log('server on! http://localhost:'+port); 
});
