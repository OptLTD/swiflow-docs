// 在服务器或构建时获取数据
// /scripts/fetch-releases.js
const fs = require('fs')
const path = require('path')
const axios = require('axios')

async function fetchReleases() {
  try {
    const owner = 'OptLTD'
    const repo = 'swiflow-docs'
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/releases`)
    
    const dataPath = path.resolve(__dirname, '../.vitepress/data')
    if (!fs.existsSync(dataPath)) {
      fs.mkdirSync(dataPath, { recursive: true })
    }
    
    fs.writeFileSync(
      path.resolve(dataPath, 'releases.json'),
      JSON.stringify(response.data, null, 2)
    )
    
    console.log('Releases fetched successfully')
  } catch (error) {
    console.error('Error fetching releases:', error.message)
  }
}

fetchReleases()