export default function ExampleModule(moduleOptions) {
  const fs = require('fs')
  console.error(this.options.image)
  console.error('HELLO WORLD')
  console.error('HELLO WORLD')
  console.error('HELLO WORLD')
  console.error('HELLO WORLD')
  console.error('HELLO WORLD')
  console.error('HELLO WORLD')
  console.error('HELLO WORLD')
  console.error('HELLO WORLD')
  console.error('HELLO WORLD')
  fs.mkdir('/.output', (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.error('Directory created')
  })
  fs.writeFile('/.output/images-manifest.json', JSON.stringify(this.options.image), (err) => {
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