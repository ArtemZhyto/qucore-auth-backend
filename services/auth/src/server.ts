// Modules
import express from 'express'

// Router
import router from '@routes/router'

// Configs
import { __PORT } from './config'

const app = express()

app.use(express.json())

app.use('/v1/auth', router)

//TODO: create a real handler for the 404 error
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: `Route ${req.originalUrl} not found`,
  })
})

app.listen(__PORT, () => {
  console.log(`Auth service starder on :${__PORT}`)
})
