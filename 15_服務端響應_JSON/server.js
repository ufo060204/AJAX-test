const express = require('express');

const app = express();

app.get('/server', (req, res) => {
  // 設置響應頭 設置允許跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  //設置響應體
  res.send('Hello World');
});

// 可以接收任意類型的請求
app.all('/server', (req, res) => {
  // 設置響應頭 設置允許跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 設置響應頭 設置允許自定義頭部信息
  res.setHeader('Access-Control-Allow-Headers', '*');
  //設置響應體
  res.send('Hello World POST');
});

app.post('/json-server', (req, res) => {
  // 設置響應頭 設置允許跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 設置響應頭 設置允許自定義頭部信息
  res.setHeader('Access-Control-Allow-Headers', '*');
  //設置響應體
  const data = { name: 'frank' };
  let str = JSON.stringify(data);
  res.send(str);
});

app.listen(8000, () => {
  console.log('伺服器啟動中... http://localhost:8000');
});