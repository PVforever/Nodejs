<%= 有等於會呈現
<% 單純運算

<%= 單引號跳脫，不會被隨便輸入的內容影響
-----------------------------------------

> npm i -g es-checker

> es-checker  # 執行

> npm list -g # 查看全域套件

> npm un -g es-checker # 移除全域套件

--------------------------------

>package.json 內的"scripts"裡面，是可以自己設定想執行的功能

錯誤先行

--------------------------------
#以下的內容，在同一個路由內不要重複出現

res.end() #結束

res.send() #如果放字串會送出html ，放obj則是json

res.render()

res.json() #回應給前端json格式

res.redirect()

---------------------------------
req.query  // query string的資料
req.body  // 表單的內容
req.file  //上傳的檔案
req.files
req.params // 路徑代稱
req.session

----------------------------------
** 完整路徑
https://www.abcde.com

** 省略協定
//www.abcde.com

** 只有路徑，同一個網站
defg

** 只變換 query string，同一個資源 (同一個頁面)
?page=5

** 同頁面內的連結，抓指定id位置
#abc





