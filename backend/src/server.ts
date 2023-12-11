import express from 'express'
import cors from 'cors'
import { promises as fs } from 'fs'
import path from 'path'



const app = express()
const port = 3001

app.use(cors())

app.get('/api/countries', async (req, res) => {
  try {
    const data = await fs.readFile(path.join('./db/data.json'), { encoding: 'utf8'})
    const json = await JSON.parse(data)
    res.json(json) 
  } catch (error) {
    console.log(error)
  }
})

app.get('/api/countries/:name', async (req, res) => {
  try {
    const countryName = req.params.name
    console.log('countryName', countryName)
    const data = await fs.readFile(path.join('./db/data.json'), { encoding: 'utf8'})
    const jsonData = await JSON.parse(data)
    //@ts-ignore
    const country = await jsonData.find(({ name }) => name.toLowerCase() === countryName)
    res.json(country) 
  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})