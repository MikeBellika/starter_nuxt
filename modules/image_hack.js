export default function ExampleModule(moduleOptions) {
  const fs = require('fs')
  console.error(this.options.image)
  console.error('root', this.options.rootDir)
  console.error('HELLO WORLD')
  console.error('HELLO WORLD')
  console.error('HELLO WORLD')
  console.error('HELLO WORLD')
  console.error('HELLO WORLD')
  console.error('HELLO WORLD')
  console.error('HELLO WORLD')
  console.error('HELLO WORLD')
  console.error('HELLO WORLD')
  fs.mkdir(this.options.rootDir + '/.output', (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.error('Directory created')
  })
  fs.writeFile(this.options.rootDir + '/.output/images-manifest.json', JSON.stringify(this.options.image), (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.error('WRITTEN')
  })
  fs.writeFile(this.options.rootDir + '/output/images-manifest.json', JSON.stringify(this.options.image), (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.error('WRITTEN')
  })

  this.nuxt.hook('ready', async nuxt => {
    console.error('Nuxt is ready')
  })
}