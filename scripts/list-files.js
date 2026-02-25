const { readdirSync, existsSync, statSync } = require('fs')
const root = '/vercel/share/v0-project'

function listDir(dir, depth = 0) {
  if (depth > 2) return
  let entries
  try {
    entries = readdirSync(dir)
  } catch (e) {
    console.log(`Cannot read: ${dir}: ${e.message}`)
    return
  }
  for (const entry of entries) {
    const full = `${dir}/${entry}`
    const stat = statSync(full)
    const indent = '  '.repeat(depth)
    if (stat.isDirectory()) {
      console.log(`${indent}[DIR] ${entry}`)
      listDir(full, depth + 1)
    } else {
      console.log(`${indent}${entry}`)
    }
  }
}

console.log('Root contents:')
listDir(root)
console.log('lib exists?', existsSync(`${root}/lib`))
console.log('assets exists?', existsSync(`${root}/assets`))
