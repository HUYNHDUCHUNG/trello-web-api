import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardValidation } from '~/validations/boardValidation'
import { boardController } from '~/controllers/boardController'
const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json('GET: APi get board')
  })
  .post(boardValidation.createBoard, boardController.createNew)

Router.route('/:id').get(boardController.getDetails).put(boardValidation.update, boardController.update)

Router.route('/supports/moving_card').put(boardValidation.moveCardOtherColumn, boardController.moveCardOtherColumn)
export const boardsRoute = Router
