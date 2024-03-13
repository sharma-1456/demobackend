require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/twitter',(req,res)=>{
    res.send("hi bro")
})

app.get('/login',(req,res)=>{
    res.send("<h1>hello brothers are enjoy this </h1>")
})

app.listen(process.env.PORT,()=>{
    console.log(`example app listing on port ${port}`)
})


console.log("Hello")