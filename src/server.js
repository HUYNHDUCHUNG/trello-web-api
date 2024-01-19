import express from 'express'

const app = express()

const hostname = 'localhost'
const port = '8012'

app.get('/', function (req, res) {
    res.send('Hello World')
  })

app.listen(port,hostname,() =>{
    console.log(`Server runing at http://${hostname}:${port}/`)
})
