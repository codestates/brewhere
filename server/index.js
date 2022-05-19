let express = require('express'); 
let app = express(); 
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');

const usersRouter = require('./router/usersRouter.js');
const breweryRouter = require('./router/breweryRouter.js');
const mypageRouter = require('./router/mypageRouter.js');

const { sequelize } = require('./models');

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'authorization'],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(cookieParser());

app.get('/', function(req, res) { 
  res.header("Access-Control-Allow-Origin", "*");
  res.send('Hello World!'); 
});

sequelize.sync({ force: false })
.then(() => {
  console.log('데이터베이스 연결 성공')
})
.catch((err) => {
  console.error(err)
})
//데이터베이스 연결 위해 추가

app.use('/users', usersRouter);
app.use('/:breweryid', breweryRouter);
app.use('/mypage', mypageRouter);

let port = 8080;
//포트 겹치지 않기 위해 임시 변경 
app.listen(port, function(){ 
  console.log('server on! http://localhost:'+port); 
});
