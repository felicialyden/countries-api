import express from 'express'
import cors from 'cors'
import { promises as fs } from 'fs'
import path from 'path'



const app = express()
const port = 3000

app.use(cors())

app.get('/api/countries', async (req, res) => {
  try {
    const data = await fs.readFile(path.join('./db/data.json'), { encoding: 'utf8'})
    res.json(data) 
  } catch (error) {
    console.log(error)
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})