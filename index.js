require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubobj ={
    "login": "sharma-1456",
    "id": 121045277,
    "node_id": "U_kgDOBzcBHQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/121045277?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/sharma-1456",
    "html_url": "https://github.com/sharma-1456",
    "followers_url": "https://api.github.com/users/sharma-1456/followers",
    "following_url": "https://api.github.com/users/sharma-1456/following{/other_user}",
    "gists_url": "https://api.github.com/users/sharma-1456/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/sharma-1456/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/sharma-1456/subscriptions",
    "organizations_url": "https://api.github.com/users/sharma-1456/orgs",
    "repos_url": "https://api.github.com/users/sharma-1456/repos",
    "events_url": "https://api.github.com/users/sharma-1456/events{/privacy}",
    "received_events_url": "https://api.github.com/users/sharma-1456/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Vishal Kumar Sharma",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2022-12-19T15:42:14Z",
    "updated_at": "2024-03-13T08:21:38Z"
  }

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/twitter',(req,res)=>{
    res.json(githubobj)
})

app.get('/login',(req,res)=>{
    res.send("<h1>hello brothers are enjoy this </h1>")
})

app.get('/github',(req,res)=>{
    res.json(githubobj)
})


app.listen(process.env.PORT,()=>{
    console.log(`example app listing on port ${port}`)
})
