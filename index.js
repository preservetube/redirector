require('dotenv').config()

const keys = require('./keys.json')
const express = require('express')
const app = express()

app.get('*', (req, res) => {
    const subdomain = req.subdomains[0]

    if (!subdomain) return res.redirect(process.env.REDIRECT)
    if (req.path == '/') return res.redirect(process.env.REDIRECT)
    if (!keys[subdomain]) return res.redirect(`${process.env.REDIRECT}${req.path}`)

    if (subdomain == 'media') return res.redirect(`https://link.storjshare.io/raw/${keys[subdomain]}/media${req.path}`)
    else return res.redirect(`https://link.storjshare.io/raw/${keys[subdomain]}/video${req.path}`)
})

app.listen(80, () => {
    console.log('Server listening on port 80!')
})