const express = require("express");
const app = express();//app objesi oluştuurldu
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req, res, next) => {
    res.send(`
    <html>
        <head><title>Add a new product</title></head>
    </html>
    <body>
        <form action="/product" method="POST">
            <input type="text" name="productName">
            <input type="submit" name="Save Product">
        </form>
    </body>
    </html>    
    `);
});

app.use("/product",(req,res,next) => {

    //db kayıt
    console.log(req.body);
    res.redirect('/') //kayıt bitince anadizine yönlernirir
});

app.use((req, res, next) => {
    res.send('<h1>anasayfa</h1>');
});
app.listen(3000, ()=> {
    console.log("listening port 3000")
});