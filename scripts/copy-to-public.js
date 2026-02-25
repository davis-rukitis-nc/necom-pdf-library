import { cpSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const root = '/vercel/share/v0-project'

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
