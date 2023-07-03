// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    
  ],
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'bootstrap/dist/css/bootstrap.min.css',
    '/assets/styles/main.scss'
  ],
  build: {
    transpile: ['primevue'],
    rollupOptions: {
      external: ['iconthankyou.svg'],
    },
  },
  
})
