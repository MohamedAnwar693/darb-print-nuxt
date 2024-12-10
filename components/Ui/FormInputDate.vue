<template>
    <div class="w-full">
        <label :class="label ? 'flex flex-col-1 gap-2' : ''" class="relative">
            <span v-if="label">{{ label }}</span>
            <input 
            v-model="value" 
            :class="inputClass, label ? '' : 'pt-2 pb-2 w-full text-right px-4'" class="px-4 text-right pt-2 pb-2 peer ring-2 ring-transparent focus:outline-none focus:ring-2 focus:border-aprimary-600 p-3 border-2 border-smooky-100" :type="type" :placeholder="placeholder" />
            <div v-show="value == ''" class="px-4 peer-focus:hidden cursor-text text-smooky-300">
                <slot name="custom-placeholder"></slot>
            </div>
        </label>
    </div>
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