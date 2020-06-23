> Node.js 鄉親們，今天來點「Node.js 入門教學」，教學內容包含 Express.js 與
> 最新流行 ES6+ 的語法與邏輯，讓我們繼續看下去 XD
> 喜歡就按個讚吧！

## 時程：
6/22 1
Nodemon, Router, Middleware, Cookie, BodyParser, Get / Post

6/23 2
Cookie, Session

6/29 1
Get / Post / Delete / Put

6/30 2
Json Web Token

7/1 3
MongoDB, Mongo mongoose, Compass GUI

7/2 4
Heroku

## 安裝與執行：
```
$ npm install
$ nodemon app.js
```

## 目錄：
###  1. 內容介紹: 
使用 Node.js 製作 Restful API，包含以下功能
- 抓取前端回傳 Get / Post 內容 *(BodyParser)*
- 以功能需求，分類後端 API *(Router)*
- 權限控管的守門員 *(Middleware)*
- 儲存在使用者瀏覽器的資訊 *(Cookie)*

### 2. 環境安裝: 
#### NPM 環境 (重零開始的，先不用安裝，步驟3實作的 npm init 完成後再裝即可)

使用 NPM 安裝以下套件 ([本機需要先安裝好 Node](https://nodejs.org/en/download/))
   - Express: 業界正流行的 Web Server 好用好上手，找 Node.js 後端工作必備 [(Reference)](https://www.npmjs.com/package/express)
   ``` 
   $ npm i express 
   ```
   
   - Nodemon: 每次更改程式碼都要再重啟 Node 讓你懷疑人生嗎？ 
   試試 Nodemon 自動幫你 Build Code [(Reference)](https://www.npmjs.com/package/nodemon)
   ```
   $ sudo npm i -g nodemon
   ```
   
   - Body-parser: 遠方的 Get/Post 傳送的內容該如何接收呢？ 試試 BodyParser 讓你溝通零距離 [(Reference)](https://www.npmjs.com/package/body-parser)
   ```
   $ npm i body-parser
   ```
   
   - Cookie-parser: 讓你安全又舒服地儲存 Cookie 在使用者的瀏覽器裡面 [(Reference)](https://www.npmjs.com/package/cookie-parser)
   ```
   $ npm i cookie-parser
   ```


### 3. 實作:
#### 撰寫 API 回傳 Hello world
   a. 新增一個資料夾取名為 Node 進入資料夾
   b. 在 terminal 輸入 ```$ npm init``` -> 只是範例可以一路 Enter 按下去
    *(完成後會在 Node 資料夾內看到 package.json 檔案)*
   c. 安裝 ``` 2. 環境安裝 ``` 的套件內容，Reference 內都附有 npm 官方範例程式碼
