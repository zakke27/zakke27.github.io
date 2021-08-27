import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import html from 'remark-html'
import remark from 'remark'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // 获取posts文件夹下的文件名字
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // 把文件夹下的文件去掉.md用作id
    const id = fileName.replace(/\.md$/, '')

    // 把md文件作为为字符串读取
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // 使用gray-matter解析md文件的元数据部分
    const matterResult = matter(fileContents)

    // 整合数据与id
    return {
      id,
      ...matterResult.data
    }
  })
  // 根据日期排序
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // 使用gray-matter
  const matterResult = matter(fileContents)

  // 使用remark
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  // 整合数据与id
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
