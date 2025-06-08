#!/usr/bin/env ts-node
import fs from 'fs'
import path from 'path'

const name = process.argv[2]
if (!name) {
  console.error('Usage: npm run new-component -- <ComponentName>')
  process.exit(1)
}

const componentsDir = path.resolve(__dirname, '../src/components')
const filePath = path.join(componentsDir, `${name}.tsx`)
if (fs.existsSync(filePath)) {
  console.error(`Component ${name} already exists`)
  process.exit(1)
}

const code = `import * as React from "react"

export function ${name}() {
  return <div>${name}</div>
}
`

fs.writeFileSync(filePath, code)

const barrelPath = path.join(componentsDir, 'index.ts')
const exportLine = `export * from "./${name}"
`

fs.appendFileSync(barrelPath, exportLine)
console.log(`Created ${name} component`)
