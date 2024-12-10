<template>
  <button @click="scrollToTop" v-show="showButton" class="hover:bg-primary-300 hover:shadow-lg w-12 h-12 text-white fixed bottom-3 right-3 bg-primary-800 rounded-full p-2">
      <fa-icon :icon="['fas', 'arrow-up']" />
  </button>
</template>
  
<script>
  export default {
    data() {
      return {
        showButton: false,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.showButton = window.pageYOffset > 300; // Show the button when scrolled down 300px
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Smooth scroll animation
        });
      },
    },
};
</script>
  