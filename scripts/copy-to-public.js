const { cpSync, existsSync, mkdirSync } = require('fs')
const { join } = require('path')

const root = '/vercel/share/v0-project'
console.log(`Working directory: ${root}`)

function copyDir(src, dest) {
  if (!existsSync(src)) {
    console.log(`Source not found, skipping: ${src}`)
    return
  }
  mkdirSync(dest, { recursive: true })
  cpSync(src, dest, { recursive: true, force: true })
  console.log(`Copied: ${src} -> ${dest}`)
}

copyDir(join(root, 'lib'), join(root, 'public', 'lib'))
copyDir(join(root, 'assets'), join(root, 'public', 'assets'))

console.log('Done.')
