import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import defu from "defu";

// Module options TypeScript interface definition
export interface ModuleOptions {
  client: any;
  server: any;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt3-pino',
    configKey: 'nuxt3Pino'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    client: {},
    server: {}
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.nuxt3Pino = defu(nuxt.options.runtimeConfig.public.nuxt3Pino, {
      client: options.client,
      server: options.server
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin({
      src: resolver.resolve("./runtime/pino.client")
    })

    addPlugin({
      src: resolver.resolve("./runtime/pino.server")
    })
  }
})
