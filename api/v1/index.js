const nodeXlsx = require('node-xlsx')
const Router = require('koa-router')
const fs = require('fs')
const path = require('path')

const downPath = path.resolve(__dirname, '../../fileUpLoad')

const router = new Router({
  prefix: '/api/v1'
})

router.post('/updateExcel', async (ctx) => {
  const { file } = ctx.request.files

})

module.exports = router