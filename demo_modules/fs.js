// File system
const fs = require('fs')
const path = require('path')
fs.mkdir(path.join(__dirname, 'test'), err => {
  if (err) {
    throw err
  }

  console.log('Папка создана')
})

const filePath = path.join(__dirname, 'test', 'text.txt')
fs.writeFile(filePath, 'Hello, this is text.txt', err => {
  if (err) {
    throw err
  }
  console.log('Файл создан')

  fs.appendFile(filePath, '\nGenerate new line with "appendFile" method', err => {
    if (err) {
      throw err
    }
    console.log('Файл обновлен')
  })
})

fs.readFile(filePath, 'UTF-8',(err, content) => {
  if (err) {
    throw err
  }
  // const data = Buffer.from(content)
  // console.log('Content: ', data.toString())
  console.log('Content: ', content)
})
