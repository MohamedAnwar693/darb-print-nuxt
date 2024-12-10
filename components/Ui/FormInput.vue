<template>
    <label :class="label ? 'flex flex-col gap-2' : ''" class="relative">
        <span v-if="label">{{ label }}</span>
        <input 
        v-model="value" 
        :class="inputClass, label ? '' : 'w-full'" class="peer ring-2 ring-transparent focus:outline-none focus:ring-2 focus:ring-primary-800 p-3 border-2 border-smooky-100" :type="type" :placeholder="placeholder" />
        <div v-show="value == ''" class="peer-focus:hidden cursor-text text-smooky-300">
            <slot name="custom-placeholder"></slot>
        </div>
    </label>
</template>

<script>
export default {
    props:['label' ,'type' ,'placeholder' ,'inputClass'],
    data(){
        return {
            value: '',
        }
    }
}
</script>