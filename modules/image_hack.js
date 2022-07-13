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
      if(err) throw err
      console.log('Directory created')
    })
    fs.writeFile('.output/images-manifest.json', JSON.stringify(this.options.image), (err) => {
      if(err) throw err
      console.log('WRITTEN')
    })
  
    this.nuxt.hook('ready', async nuxt => {
      console.log('Nuxt is ready')
    })
  }