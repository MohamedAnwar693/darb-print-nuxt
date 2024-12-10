<template>
    <label class="relative flex gap-1 items-center cursor-pointer" @click="show = !show">
        <div class="flex items-center gap-2 cursor-pointer w-full">
            <slot name="selected-option"></slot>
            <fa-icon class="mr-auto" :icon="['fas', 'angle-down']" />
        </div>
        <div v-show="show" class="absolute top-10 right-0 bg-white shadow-lg rounded z-20" :class="dropdownClasses">
            <slot name="options"></slot> 
        </div>
    </label>
</template>

<script>
export default {
    props:['dropdownClasses'],
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