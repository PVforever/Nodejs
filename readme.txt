<%= 有等於才會呈現，沒有只是單純運算

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


