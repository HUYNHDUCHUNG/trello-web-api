// eslint-disable-next-line no-console
import express from 'express'
import cors from 'cors'
import { CLOSE_DB, CONNECT_DB, GET_DB } from '~/config/mongodb'
import exitHook from 'async-exit-hook'
import { env } from '~/config/environment'
import { APIs_V1 } from './routes/v1'
import { CorsOptions } from 'cors'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware.js'
const START_SERVER = () => {
  const app = express()
  app.use(cors(CorsOptions))
  // Enable req.body json data
  app.use(express.json())

  // Use APIs v1
  app.use('/v1', APIs_V1)

  app.use(errorHandlingMiddleware)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Server running at http://${env.APP_HOST}:${env.APP_PORT}/`)
  })

  exitHook(() => {
    CLOSE_DB()
  })
}

CONNECT_DB()
  .then(() => console.log('Connected to MongoDB'))
  .then(() => START_SERVER())
  .catch((error) => {
    console.error(error)
    process.exit(0)
  })
