const express = require('express');
const dayjs = require('dayjs');
const db = require(__dirname + "/../modules/connect-db");
const router = express.Router();

//每頁呈現的資料數量//
router.get('/', async (req, res)=>{
    let page = req.query.page || 1;
    page = parseInt(page);
    if(page < 1){
        return res.redirect('?page=1');
    }
    let rows = [];

    const perPage = 20; //每頁最多幾筆
    const sql = "SELECT COUNT(1) totalRows FROM `address_book`";
    const [[{totalRows}]] = await db.query(sql);

    const totalPages = Math.ceil(totalRows/perPage);
    if(totalRows) {
        if(page > totalPages) {
            return res.redirect(`page=${totalPages}`);
        }
        const sql2 = `SELECT * FROM address_book ORDER BY sid ASC LIMIT ${(page-1)*perPage}, ${perPage}`;
        [rows] = await db.query(sql2);
        rows.forEach(i=>{
            i.birthday = dayjs(i.birthday).format('YYYY-MM-DD');
        })

    }
    //
    // res.json({page, totalRows, totalPages, perPage, rows});
    res.render('address-book/list', {page, totalRows, totalPages, perPage, rows});
});

module.exports = router;