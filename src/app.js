const express = require('express')
const path = require('path')



const app = express()
const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir))


app.get('/weather', (req, res) => {
  res.send('Weather')
})

app.listen(3000, () =>{
  console.log('server is listening on port 3000')
})
