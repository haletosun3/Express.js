const express = require("express");
const router = express.Router();

router.get('/add-product',(req, res, next) => {
    res.send(`
    <html>
        <head><title>Add a new product</title></head>
    </html>
    <body>
        <form action="/admin/add-product" method="POST">
            <input type="text" name="productName">
            <input type="submit" name="Save Product">
        </form>
    </body>
    </html>    
    `);
});

router.post("/add-product",(req,res,next) => {

    //db kayıt
    console.log(req.body);
    res.redirect('/') //kayıt bitince anadizine yönlernirir
});
 module.exports = router;