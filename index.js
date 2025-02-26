const express = require('express')
require('dotenv').config()

const app = express()
const port = 6532

const githubData = {
    "login": "tanmayc43",
    "id": 168345467,
    "node_id": "U_kgDOCgi_ew",
    "avatar_url": "https://avatars.githubusercontent.com/u/168345467?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/tanmayc43",
    "html_url": "https://github.com/tanmayc43",
    "followers_url": "https://api.github.com/users/tanmayc43/followers",
    "following_url": "https://api.github.com/users/tanmayc43/following{/other_user}",
    "gists_url": "https://api.github.com/users/tanmayc43/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/tanmayc43/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/tanmayc43/subscriptions",
    "organizations_url": "https://api.github.com/users/tanmayc43/orgs",
    "repos_url": "https://api.github.com/users/tanmayc43/repos",
    "events_url": "https://api.github.com/users/tanmayc43/events{/privacy}",
    "received_events_url": "https://api.github.com/users/tanmayc43/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Tanmay Chaturvedi ",
    "company": "Indian Institute of Information Technology (IIITG) Guwahati",
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 0,
    "followers": 1,
    "following": 13,
    "created_at": "2024-04-28T12:13:39Z",
    "updated_at": "2025-02-01T14:52:10Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/contact', (req, res) => {
    res.send('unreachable lol')
})

app.get('/login', (req, res) => {
    res.send('<h1>so you want to login here</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})