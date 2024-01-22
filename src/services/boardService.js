import { slugify } from '~/utils/formatter'
import { boardModel } from '~/models/boardModel'
const createNew = async (data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const newBoard = {
      ...data,
      slug: slugify(data.title)
    }

    const createdBoard = await boardModel.createNew(newBoard)

    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)
    console.log(getNewBoard)
    return getNewBoard
  } catch (error) {
    throw error
  }
}

const getDetails = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const getBoardDetails = await boardModel.getDetails(id)
    return getBoardDetails
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew,
  getDetails
}
