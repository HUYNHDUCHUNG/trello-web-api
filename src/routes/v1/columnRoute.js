import express from 'express'
import { columnValidation } from '~/validations/columnVadidation'
import { columnController } from '~/controllers/columnController'
const Router = express.Router()

Router.route('/').post(columnValidation.createColumn, columnController.createNew)

Router.route('/:id')
  .put(columnValidation.update, columnController.update)
  .delete(columnValidation.deleteItem, columnController.deleteItem)

export const columnRoute = Router
