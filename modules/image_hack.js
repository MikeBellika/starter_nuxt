export default function ExampleModule(moduleOptions) {
  const fs = require('fs')
    console.log(this.options.image)
    console.log('HELLO WORLD')
    console.log('HELLO WORLD')
    console.log('HELLO WORLD')
    console.log('HELLO WORLD')
    console.log('HELLO WORLD')
    console.log('HELLO WORLD')
    console.log('HELLO WORLD')
    console.log('HELLO WORLD')
    console.log('HELLO WORLD')
    fs.mkdir('.output', (err) => {
      if(err) console.error(err)
      console.log('Directory created')
    })
    fs.writeFile('.output/images-manifest.json', JSON.stringify(this.options.image), (err) => {
      if(err) console.error(err)
      console.warn('WRITTEN')
    })
  
    this.nuxt.hook('ready', async nuxt => {
      console.log('Nuxt is ready')
    })
  }