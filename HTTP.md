# HTTP
HTTP 

## 請求報文
重點是格式與參數
```
行  POST /s?ie=utf-8(URL) HTTP/1.1(最多的版本)
頭  Host: xxx.com
    Cookie: name=nathan
    Content-type: application/x-www-form-urlencorded
    User-Agent: chrome 83
空行
體  username=admin&password=admin
    備註：GET 請求的話是空的
```

## 響應報文
```
行  HTTP/1.1 200 OK
頭  Content-type: text/html;charset=utf-8
    Content-length: 2048(長度)
    Content-encoding: gzip(壓縮方式)
空行
體  <html>
      <head>
        <body>
        <h1>hello world</h1>
        </body>
      </head>
    </html>
```
狀態碼：
* 200
* 404
* 403
* 401
* 500