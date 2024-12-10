<template>
    <div 
    @click="isActive = !isActive"
    :class="[
        isActive ? 'bg-aprimary-600' : 'bg-agray-400', 
        isActive ? 'flex-row' : 'flex-row-reverse',
        'flex cursor-pointer w-[35px] rounded-full p-[2px]'
        ]">
        <div class="bg-white h-full rounded-full p-2 w-[15px]"></div>
    </div>
</template>

<script>
export default {
    props:['active'],
    computed: {
      isActive: {
        get () { return this.active },
        set (value) {
            this.$emit('update:status', value)
         },
      },
    },
}
</script>