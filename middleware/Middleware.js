const express = require("express");

const app = express();//app objesi oluştuurldu

app.use((req, res, next) => {
    console.log("middleware 1 çalıstı");
    next();
});

app.use((req, res, next) => {
    console.log("middleware 2 çalıstı");
    res.send('<h1>middleware 2</h1>')
});

app.listen(3001, ()=> {
    console.log("listening port 3001")
});