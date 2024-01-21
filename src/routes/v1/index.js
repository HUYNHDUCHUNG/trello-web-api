import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardsRoute } from './boardsRoute'
const Router = express.Router()

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json('APIs V1 are ready use')
})

Router.use('/boards', boardsRoute)

export const APIs_V1 = Router
