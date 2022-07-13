// export default async function ExampleModule(moduleOptions) {
//   const fs = require('fs')
//   console.error(this.options.image)
//   console.error('root', this.options.rootDir)
//   console.error('HELLO WORLD')
//   console.error('HELLO WORLD')
//   console.error('HELLO WORLD')
//   console.error('HELLO WORLD')
//   console.error('HELLO WORLD')
//   console.error('HELLO WORLD')
//   console.error('HELLO WORLD')
//   console.error('HELLO WORLD')
//   console.error('HELLO WORLD')
//   await fs.mkdir(this.options.rootDir + '/.output', (err) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.error('Directory created .output')
//   })
  
//   await fs.mkdir(this.options.rootDir + '/output', (err) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.error('Directory created output')
//   })

//   await fs.mkdir(this.options.rootDir + '/.vercel', (err) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.error('Directory created .vercel')
//   })
//   await fs.mkdir(this.options.rootDir + '/.vercel/output', (err) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.error('Directory created .vercel/output')
//   })
  

  

//   await fs.writeFile(this.options.rootDir + '/.output/images-manifest.json', JSON.stringify(this.options.image), (err) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.error('WRITTEN .output/images-manifest')
//   })
//   await fs.writeFile(this.options.rootDir + '/output/images-manifest.json', JSON.stringify(this.options.image), (err) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.error('WRITTEN output/images-manifest')
//   })
//   await fs.writeFile(this.options.rootDir + '/.vercel/output/images-manifest.json', JSON.stringify(this.options.image), (err) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.error('WRITTEN .vercel/output/images-manifest')
//   })
//   const cool = {
//     "version": 3,
//     "routes": [
//       {
//         "src": "/_nuxt/.+",
//         "headers": {
//           "Cache-Control": "max-age=31557600"
//         }
//       },
//       {
//         "src": "/.vercel/output/config.json",
//         "headers": {
//           "Cache-Control": "max-age=31557600"
//         }
//       },
//       {
//         "src": "/config.json",
//         "headers": {
//           "Cache-Control": "max-age=31557600"
//         }
//       },
//       {
//         "src": "/favicon.ico",
//         "headers": {
//           "Cache-Control": "max-age=31557600"
//         }
//       },
//       {
//         "src": "/flowers.jpeg",
//         "headers": {
//           "Cache-Control": "max-age=31557600"
//         }
//       },
//       {
//         "handle": "filesystem"
//       },
//       {
//         "src": "/(.*)",
//         "dest": "/index"
//       }
//     ],
//     image: {
//       "sizes": [256, 384, 600, 1000, 1024],
//       "domains": ["avatars.githubusercontent.com"],
//       "minimumCacheTTL": 60,
//       "formats": ["image/webp", "image/avif"]
//     },
//   }
  
//   await fs.writeFile(this.options.rootDir + '/.vercel/output/config.json', JSON.stringify(cool), (err) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.error('WRITTEN .vercel/output/config.json')
//   })
  
//   this.nuxt.hook('ready', async nuxt => {
//     console.error('Nuxt is ready')
//   })
// }