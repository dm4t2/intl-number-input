/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs').promises
const { createReadStream } = require('fs')
const { createInterface } = require('readline')
const { join, parse } = require('path')
const { exec } = require('child_process')

const run = async () => {
  await new Promise((resolve, reject) =>
    exec('api-documenter markdown -i temp -o docs/api', (err, stdout, stderr) => {
      console.log(stdout)
      console.error(stderr)
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  )

  await fs.unlink('./docs/api/index.md')
  await fs.rename('./docs/api/intl-number-input.md', './docs/api/index.md')
  const dir = './docs/api'
  const docFiles = await fs.readdir(dir)
  for (const docFile of docFiles) {
    try {
      const { ext } = parse(docFile)
      if (ext !== '.md') {
        continue
      }

      const docPath = join(dir, docFile)
      const input = createReadStream(docPath)
      const output = []
      const lines = createInterface({
        input,
        crlfDelay: Infinity
      })

      lines.on('line', (line) => {
        let skip = false
        if (line.startsWith('[Home](./index.md)')) {
          output.push(line.replace('[Home](./index.md) &gt; [intl-number-input](./intl-number-input.md)', '[Overview](./index.md)'))
          skip = true
        }
        if (line === '## intl-number-input package') {
          output.push('# API')
          skip = true
        }
        if (!skip) {
          output.push(line)
        }
      })

      await new Promise((resolve) => lines.once('close', resolve))
      input.close()

      await fs.writeFile(docPath, output.join('\n'))
    } catch (err) {
      console.error(`Could not process ${docFile}: ${err}`)
    }
  }
}

run()
