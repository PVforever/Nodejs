const express = require('express');

const router = express.Router();

router.get('/:p3?/:p4?', (req, res)=>{
    res.json({
        url: req.url,   //router裡的路徑
        baseUrl: req.baseUrl,  //
        originalUrl: req.originalUrl,  //完整路徑
        params: req.params
    });
});

module.exports = router;