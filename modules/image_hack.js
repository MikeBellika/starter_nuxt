export default function ExampleModule(moduleOptions) {
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
  
    this.nuxt.hook('ready', async nuxt => {
      console.log('Nuxt is ready')
    })
  }