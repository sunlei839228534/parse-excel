const xlsx = require('node-xlsx')
const fs = require('fs')
const path = require('path')


const downPath = path.resolve(__dirname, '../fileUpload');

async function getExcelObjs(ctx) {
  const file = ctx.request.files.file
  const reader = fs.createReadStream(file.path)
  const ext = file.name.split('.').pop()
  const fileName = new Date().getTime() + '.' + ext
  const filePath = `${downPath}/${fileName}`

  const upStream = fs.createWriteStream(filePath)
  const getRes = await getFile(reader, upStream)

  const datas = []
  if (!getRes) {
    const workbook = xlsx.parse(filePath)
    //删除文件
    delFile(fileName)
    return workbook
  } else {
    console.log('解析excel时出现了问题')
  }
}

const getFile = (reader, upStream) => {
  return new Promise(result => {
    let stream = reader.pipe(upStream)
    stream.on('finish', (err) => {
      result(err)
    })
  })
}

const delFile = (fileName) => {
  const curPath = downPath + '/' + fileName
  fs.unlinkSync(curPath)
}


module.exports = {
  getExcelObjs
}