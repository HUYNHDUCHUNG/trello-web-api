import { boardModel } from '~/models/boardModel'
import { columnModel } from '~/models/columnModel'
const createNew = async (data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const newColumn = {
      ...data
    }

    const createdColumn = await columnModel.createNew(newColumn)
    const getNewColumn = await columnModel.findOneById(createdColumn.insertedId)

    if (getNewColumn) {
      getNewColumn.cards = []

      await boardModel.pushColumnOrderIds(getNewColumn)
    }

    return getNewColumn
  } catch (error) {
    throw error
  }
}
export const columnService = {
  createNew
}
