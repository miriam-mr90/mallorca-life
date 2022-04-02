import fs from 'fs'
import path from 'path'

export const parsePage = (filename:string) => {
  const onePageData = JSON.parse(fs.readFileSync(filename).toString())

  const [file] = filename.split('/').reverse()
  const [id] = file.split('.')

  return {
    id,
    ...onePageData,
  }
}

// This method is used to get the data of the content directory.
// First we get the files of the directory, then we parse the files and return the data
export const getCategoryContent = (contentFolderName:string) => {
  const CONTENT_PATH = `content/${contentFolderName}`
  const fileNames = fs.readdirSync(CONTENT_PATH)

  return fileNames.map((filename) =>
    parsePage(path.join(CONTENT_PATH, filename))
  )
}

export const getPageContent = (page:string) => {
  const PAGES_PATH = 'content/pages'
  return parsePage(path.join(PAGES_PATH, page))
}
