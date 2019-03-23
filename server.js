const express = require('express')
const serverRender = require('vue-server-renderer')
const createApp = require('./dist/bundler.server.js')['default']

const server = express()
const renderer = serverRender.createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
})
server.get('*', (req, res) => {
    let config = {url: req.url}
    createApp(config).then(app => {
        renderer.renderToString(app, (err, html) => {
            res.end(html)
        })
    })
})

server.listen(3000, () => {
    console.log(9999)
})