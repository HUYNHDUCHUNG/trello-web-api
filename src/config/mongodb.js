const MONGODB_URI =
  'mongodb+srv://huynhhung2108:k7smVleWm1E8yTvd@cluster0.rjlmaqg.mongodb.net/?retryWrites=true&w=majority'
const DATABASE_NAME = 'trello'

import { MongoClient, ServerApiVersion } from 'mongodb'

let trelloDatabaseInstance = null

const clientInstance = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await clientInstance.connect()

  trelloDatabaseInstance = clientInstance.db(DATABASE_NAME)
}

export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('must connect to Database first')
  return trelloDatabaseInstance
}
