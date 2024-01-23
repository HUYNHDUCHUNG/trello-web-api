import express from 'express'
import { columnValidation } from '~/validations/columnVadidation'
import { columnController } from '~/controllers/columnController'
const Router = express.Router()

Router.route('/').post(columnValidation.createColumn, columnController.createNew)

export const columnRoute = Router
