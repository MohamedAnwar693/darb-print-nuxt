<template>
    <label class="flex flex-col gap-2 relative">
        <span>{{ label }}</span>
        <input 
        ref="element"
        @input="handleValueChanged" v-model="value" 
        class="peer opacity-0 absolute top-0 right-0 focus:outline-none focus:ring-2 focus:ring-primary-800 p-3 border-2 border-smooky-100" type="date" />
        <div v-show="value == ''" class="peer-focus:hidden cursor-text text-smooky-300">
            <slot name="custom-placeholder"></slot>
        </div>

        <button class="p-3 border z-20 flex items-center gap-4" :class="value.length > 0 ? 'bg-primary-100' : ''" @click="$refs.element.showPicker()">
            <svg width="23" height="24" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5395 3.58991V1M16.5395 3.58991V6.17982M16.5395 3.58991H10.7122M1 11.3596V23.0142C1 24.4446 2.15954 25.6041 3.58991 25.6041H21.7193C23.1497 25.6041 24.3092 24.4446 24.3092 23.0142V11.3596H1Z" stroke="#014549" stroke-width="1.94243" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 11.3596V6.17975C1 4.74939 2.15954 3.58984 3.58991 3.58984H6.17982" stroke="#014549" stroke-width="1.94243" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.17969 1V6.17982" stroke="#014549" stroke-width="1.94243" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.3097 11.3596V6.17975C24.3097 4.74939 23.1502 3.58984 21.7197 3.58984H21.0723" stroke="#014549" stroke-width="1.94243" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <span class="text-lg">
                {{ value }}
            </span>
        </button>
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
    mounted(){
        this.value = this.defaultValue
        this.handleValueChanged()
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