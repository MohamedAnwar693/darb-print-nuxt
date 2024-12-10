// const baseUrl = 'https://ewewewew.rouad.tech/public/api'
const baseUrl = 'http://127.0.0.1:8000/public/api'

const api = {
  categories: {
    promotional_cards: `${baseUrl}/categories/31`
  },
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties = {
        '$api' : api
    }
})

export {api}