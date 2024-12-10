<template>
    <label class="relative flex gap-1 items-center cursor-pointer" @click="show = !show">
        <div 
        :class="['flex items-center gap-2 cursor-pointer w-full p-2',
        show ? 'border-2 border-aprimary-600' : 'border-2 border-asmooky-200', 
        customClasses]"
        class="">
            <slot name="selected-option"></slot>
            <fa-icon class="mr-auto" :icon="['fas', 'angle-down']" />
        </div>
        <div v-show="show" class="w-full absolute top-10 right-0 bg-asmooky-200 shadow-lg z-20 max-h-[150px] overflow-y-scroll">
            <slot name="options"></slot> 
        </div>
    </label>
</template>

<script>
export default {
  props:['customClasses'],
  data(){
      return {
          show: false
      }
  },
  methods:{
      close (e) {
        if (!this.$el.contains(e.target)) {
          this.show = false
        }
      }
  },

  mounted () {
    document.addEventListener('click', this.close)
  },
  beforeDestroy () {
    document.removeEventListener('click',this.close)
  }
}
</script>