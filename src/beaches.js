import fs from 'fs'
import path from 'path'

const BEACHES_PATH = 'content/beaches'

function parseOneNews(filename) {
  const oneBeachData = JSON.parse(fs.readFileSync(filename).toString())

  const [file] = filename.split('/').reverse()
  const [id] = file.split('.')

  return {
    id,
    ...oneBeachData,
  }
}

export function getBeaches() {
  const fileNames = fs.readdirSync(BEACHES_PATH)

  return fileNames.map((filename) =>
    parseOneNews(path.join(BEACHES_PATH, filename))
  )
}
