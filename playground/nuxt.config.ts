export default defineNuxtConfig({
  modules: ['../src/module'],
  nuxt3Pino: {
    client: {
      foo: 'bar'
    },
    server: {
      foo: 'baz'
    }
  },
  devtools: { enabled: true }
})
