import { StatusCodes } from 'http-status-codes'
import { columnService } from '~/services/columnService'
const createNew = async (req, res, next) => {
  try {
    const createColumn = await columnService.createNew(req.body)
    res.status(StatusCodes.CREATED).json(createColumn)
  } catch (error) {
    next(error)
  }
}
const update = async (req, res, next) => {
  try {
    const updatedColumn = await columnService.update(req.params.id, req.body)
    res.status(StatusCodes.OK).json(updatedColumn)
  } catch (error) {
    next(error)
  }
}

const deleteItem = async (req, res, next) => {
  try {
    const result = await columnService.deleteItem(req.params.id)
    res.status(StatusCodes.OK).json(result)
  } catch (error) {
    next(error)
  }
}

export const columnController = {
  createNew,
  update,
  deleteItem
}
