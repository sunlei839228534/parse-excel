const nodeXlsx = require('node-xlsx')
const Router = require('koa-router')
const fs = require('fs')
const path = require('path')
const { getExcelObjs } = require('../../utils/uploadExcelSrv')

const router = new Router({
  prefix: '/api/v1'
})

router.post('/uploadExcel', async (ctx, next) => {
  const result = await getExcelObjs(ctx)
  ctx.body = result
  await next()
})



module.exports = router