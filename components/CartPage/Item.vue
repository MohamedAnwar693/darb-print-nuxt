<template>
    <div v-if="item" class="border-smooky-250 border flex flex-col gap-8 p-5 relative">
        <div class="flex gap-2 items-center">
            <div class="bg-smooky-100">
                <img class="w-20" src="~/assets/images/cart-item.png" :alt="item.name">
            </div>
            <div>
                <h2 class="font-bold text-lg">{{ item.name }}</h2>
                <p>{{ item.price }} ر.س</p>
                <p class="text-xs text-smooky-300">الإجمالي {{ item.price * item.quantity }} ر.س</p>
            </div>
        </div>
        <div class="flex gap-28 items-center">
            <h3 class="font-bold text-lg">الكمية</h3>
            <UiSelect class="border border-smooky-250 p-2 w-1/2" dropdownClasses="w-full">
                <template v-slot:selected-option>
                    100
                </template>
                <template v-slot:options>
                    <div class="flex items-center cursor-pointer bg-primary-800 text-white p-2 hover:bg-primary-800 hover:text-white">
                        100
                        <fa-icon class="mr-auto" :icon="['fas', 'check']" />
                    </div>
                    <div class="flex items-center cursor-pointer bg-white p-2 hover:bg-primary-800 hover:text-white">200</div>
                </template>
            </UiSelect>
        </div>
        <button @click="$emit('removeItemFromCart' ,item.id)" class="cursor-pointer hover:opacity-50 absolute left-2 top-2 rounded-full bg-rosy-800 text-white h-6 w-6 text-center">
            <fa-icon :icon="['fas', 'xmark']" />
        </button>
    </div>
</template>

<script>
export default {
    props:['item']
}
</script>