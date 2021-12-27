import fs from 'fs'
import path from 'path'

const RESTAURANTS_PATH = 'content/pages'

function parseOnePage(filename) {
  const onePageData = JSON.parse(fs.readFileSync(filename).toString())

  const [file] = filename.split('/').reverse()
  const [id] = file.split('.')

  return {
    id,
    ...onePageData,
  }
}

export function getPageData(page) {
  // const fileNames = fs.readdirSync(RESTAURANTS_PATH)

  return parseOnePage(path.join(RESTAURANTS_PATH, page))
}
