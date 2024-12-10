<template>
    <div class="border-2 border-smooky-100 flex gap-2 p-2 lg:p-4">
        <div class="bg-smooky-100 p-4">
            <img class="w-10 lg:w-24" :src="item.image" :alt="item.title" />
        </div>
        <div class="flex flex-col justify-between text-sm lg:text-base flex-1">
            <span class="font-bold">{{ item.title }}</span>
            <span class="flex">
                <span>. السعر</span>
                <span class="font-bold mr-auto text-xs lg:text-base">{{ item.price }}</span>
            </span>
            <span class="flex">
                <span>. الكمية</span>
                <span class="font-bold mr-auto text-xs lg:text-base">{{ item.quantity }}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props:['item']
}
</script>