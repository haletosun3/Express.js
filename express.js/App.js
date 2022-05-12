const express = require("express");

const app = express();//app objesi oluştuurldu

app.get('/', (req,res) => {
    res.send("hello");
})
app.get('/api/products', (req,res) => {
    res.send("ürünler listelendi");
})
app.listen(3000, ()=> {
    console.log("listening port 3000")
});