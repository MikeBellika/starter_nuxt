import Vue from 'vue'
import { createImage} from '~image'
import NuxtImg from '~image/components/nuxt-img.vue'
import NuxtPicture from '~image/components/nuxt-picture.vue'

import * as staticRuntime$64bb from '/Users/mike/code/starter_nuxt/node_modules_dev/@nuxt/image/dist/runtime/providers/static.js'
import * as vercelRuntime$a8b2 from '/Users/mike/code/starter_nuxt/node_modules_dev/@nuxt/image/dist/runtime/providers/vercel.js'

const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "vercel",
  "domains": [
    "avatars.githubusercontent.com"
  ],
  "alias": {}
}

imageOptions.providers = {
  ['static']: { provider: staticRuntime$64bb, defaults: {} },
  ['vercel']: { provider: vercelRuntime$a8b2, defaults: {} }
}

Vue.component(NuxtImg.name, NuxtImg)
Vue.component(NuxtPicture.name, NuxtPicture)
Vue.component('NImg', NuxtImg)
Vue.component('NPicture', NuxtPicture)

export default function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext)

  if (process.static && process.server) {
    nuxtContext.beforeNuxtRender(({ nuxtState }) => {
      const ssrData = nuxtState.data[0] || {}
      ssrData._img = nuxtState._img || {}
    })
  }

  inject('img', $img)
}
