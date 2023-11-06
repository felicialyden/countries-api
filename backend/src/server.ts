import express from 'express'
import cors from 'cors'


const app = express()
const port = 3000

app.use(cors())

app.get('/api/countries', (req, res) => {
  console.log(req)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})