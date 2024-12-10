<template>
    <label @click="$refs.element.showPicker()" :class="[!value ? 'bg-asmooky-200 text-agray-400' : 'bg-aprimary-600 text-white', 'cursor-pointer relative text-sm p-2 w-[200px] flex']">
        <span>{{ value || label }}</span>
        <Icon class="mr-auto" name="ic:baseline-keyboard-arrow-down" size="1.2rem" />
        <input @input="handleValueChanged" v-model="value"  ref="element" type="date" class="opacity-0 absolute bottom-0 left-0" />
    </label>
</template>
<script>
export default {
    props:['label' ,'defaultValue'],
    data(){
        return {
            value: '',
        }
    },
    methods:{
        handleValueChanged(){
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const selectedDate = new Date(this.value || this.defaultValue);
            const formattedDate = selectedDate.toLocaleDateString('en-US', options);
            
            this.value = formattedDate;
        }
    }
}
</script>