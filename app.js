const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const koaBody = require('koa-body')

app.use(koaBody({ multipart: true }))

const { PORT } = require('./config')

const v1 = require('./api/v1')

app.use(v1.routes(), v1.allowedMethods())

app.listen(PORT, () => {
  console.log(`server is running in ${PORT}`);
})