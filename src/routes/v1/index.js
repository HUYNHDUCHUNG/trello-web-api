import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardsRoute } from './boardRoute'
import { columnRoute } from './columnRoute'
import { cardRoute } from './cardRoute'
const Router = express.Router()

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json('APIs V1 are ready use')
})

Router.use('/boards', boardsRoute)

Router.use('/columns', columnRoute)

Router.use('/cards', cardRoute)

export const APIs_V1 = Router
