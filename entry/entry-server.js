import createApp from '../src/main.js'

export default (config) => {
    return new Promise((resolve, reject) => {
        let app = createApp()
        app.$router.push(config.url)
        resolve(app)
    })
}