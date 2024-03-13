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

app.get('/login',(req,res)=>{
    res.send("<img src=https://unsplash.com/photos/a-vase-of-flowers-sitting-on-a-dresser-next-to-a-mirror-e1xUQmlgbfE>")
})

app.listen(process.env.PORT,()=>{
    console.log(`example app listing on port ${port}`)
})
