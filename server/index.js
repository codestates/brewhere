require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(express.json());

app.use(
  cors({ origin: true })
);

app.use(cookieParser());
// app.post("/login", controllers.login);

// route - 

app.get('/', (req, res) => {
  res.send('Server On');
})


app.listen(port, () => {
  console.log(`server running on port ${port}`);
})

module.exports = app;