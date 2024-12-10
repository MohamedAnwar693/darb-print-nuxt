/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  safelist:[
    'w-2',
  ],
  theme: {
    extend:{
      colors: {
        primary: {
          '800': '#00464A',
          '700': '#2F413B',
          '300': '#009393',
          '200': '#C9D8D9',
          '100': '#D5E5E3',
        },
        rosy: {
          '800': '#8D2A46'
        },
        smooky:{
          '800': '#333333',
          '400': '#F9F9F9',
          '300': '#6B7280',
          '250': '#E6E6E6',
          '200': '#9CA3AF',
          '150': '#C8C8C8',
          '100': '#F2F2F2',
          '50': '#F3F4F6'
        },
        
        // admin color pallete
        ared:{
          '600': '#fa896b'
        },
        ablue:{
          '600':'#2563eb'
        },
        aorange:{
          '700': '#ffae1f',
          '600': '#ff8a00',
          '500': '#fa896b' // Light Theme/Action/Error
        },
        agray:{
          '400': '#7c8fac', // Light Theme/Gray/Medium blue grey
          '300': '#5a6a85', // Light Theme/Gray/Md New Grey
          '200': '#f2f6fa', // Light Theme/Gray/Lightest Grey
          '100': '#f7f9fb'
        },
        asmooky:{
          '200':'#dfe5ef', // Light Theme/Gray/Light Grey
          '100':'#EAEFF4',
          '50': '#D9D9D9'
        },
        aprimary:{
          '600': '#5d87ff', // Light Theme/Primary/Primary
          '400': '#49beff',
          '300': '#539bff' // Light Theme/Action/Info 
        },
        agreen:{
          '500': '#13deb9' // Light Theme/Action/Success
        },
      }
    }
  },

  variants:{
    extend: {
      display: ['group-hover'],
    },
  },
  
  plugins: [
    require('tailwindcss-animatecss')({
      classes: ['animate__animated','animate__bounceIn' ,'animate__fadeIn','animate__slideInLeft' ,'animate__slideInRight' ,'animate__slideInDown'],
      settings: {
        animatedSpeed: 500,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000
      },
      variants: ['responsive', 'hover', 'reduced-motion'],
    }),
  ],
}

