const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const axios = require('axios')
app.use(express.static('build'))

app.get('/api/events', async (req, res) => {
  const limit = req.query.limit
  const response = await axios.get(`http://open-api.myhelsinki.fi/v1/events/?limit=${limit}`);
  res.json(response.data)
})

app.get('/api/places', async (req, res) => {
  const response = await axios.get(`http://open-api.myhelsinki.fi/v1/places/`);
  res.json(response.data)
})

app.get('/api/activities', async (req, res) => {
  const response = await axios.get(`http://open-api.myhelsinki.fi/v2/activities`);
  res.json(response.data)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})