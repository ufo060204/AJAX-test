const express = require('express');

const app = express();

app.get('/server', (req, res) => {
  // 設置響應頭 設置允許跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  //設置響應體
  res.send('Hello World');
});

app.listen(8000, () => {
  console.log('伺服器啟動中... http://localhost:8000');
});