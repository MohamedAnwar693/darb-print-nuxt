<template>
    <div :class="isFocusing ? 'border-aprimary-600' : 'border-asmooky-200'" class="flex items-stretch border-2">
        <input @focus="isFocusing = true" @blur="isFocusing = false" type="text" class="flex-1 p-2 focus:outline-none" v-model="selectedColor"/>
         <label class="relative w-1/3 h-12">
            <input type="color" class="h-12 w-full" v-model="selectedColor"/>
            <div class="absolute h-full w-full right-0 top-0" :style="`background-color:${selectedColor};`"></div>
        </label>
    </div>
</template>

<script>
export default {
    props:['color'], 
    data(){
        return {
            isFocusing: false
        }
    },
    computed: {
      selectedColor: {
        get () { return this.color },
        set (value) {
            this.$emit('update:color', value)
        },
      },
    },
}
</script>

<style scoped>
::-webkit-color-swatch {
    @apply border-0 border-transparent;
}
::-moz-color-swatch {
    @apply border-0 border-transparent;
}
</style>