<template>
    <label :class="isFocusing ? 'border-2 border-primary-800' : 'border-2 border-smooky-100'" 
    class="relative flex items-center px-2">
        <div class="text-smooky-300 px-2">
            <slot name="icon"></slot>
        </div>

        <input 
        v-model="value" 
        @focus="isFocusing = true"
        @blur="isFocusing = false"
        class="peer w-full p-3 focus:outline-none" :type="type" :placeholder="isFocusing ? '' : placeholder" />
    </label>
</template>

<script>
export default {
    props:['label' ,'type' ,'placeholder' ,'inputClass'],
    data(){
        return {
            value: '',
            isFocusing: false
        }
    }
}
</script>