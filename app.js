const Koa = require('koa')
const path = require('path')
const bodyParser = require("koa-bodyParser")
const nunjucks = require('koa-nunjucks-2')
const router = require("./router")
const app = new Koa()
// 引入koa-static
const staticFiles = require('koa-static')
// 指定public目录为静态资源目录， 用来存放js css images等
app.use(staticFiles(path.resolve(__dirname, "./public")))

app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'), //指定视图目录
    nunjucksConfig: {
        trimBlocks: true //开启转义防Xss
    }
}))
app.use(bodyParser())

router(app)

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})