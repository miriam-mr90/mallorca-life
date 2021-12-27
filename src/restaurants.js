import fs from 'fs'
import path from 'path'

const RESTAURANTS_PATH = 'content/restaurants'

function parseOneNews(filename) {
  const oneRestaurantData = JSON.parse(fs.readFileSync(filename).toString())

  const [file] = filename.split('/').reverse()
  const [id] = file.split('.')

  return {
    id,
    ...oneRestaurantData,
  }
}

export function getRestaurants() {
  const fileNames = fs.readdirSync(RESTAURANTS_PATH)

  return fileNames.map((filename) =>
    parseOneNews(path.join(RESTAURANTS_PATH, filename))
  )
}
