<template>
    <div v-show="loading" class="stretch-to-full fixed left-0 top-0 h-1 w-full z-50 bg-primary-800" />
</template>

<style scoped>
.stretch-to-full{
  animation: stretchToFull 1s ease;
}
@keyframes stretchToFull {
  0%{
      width: 0%;
  }
  100%{
      width: 100%;
  }
}
</style>
<script setup lang="ts">
const nuxtApp = useNuxtApp()
const loading = ref(false)

nuxtApp.hook("page:start", () => {
  loading.value = true;
})

nuxtApp.hook("page:finish", () => {
 loading.value = false;
})
</script>