<template>
    <div class="bg-white border absolute right-0 w-full top-[48px] z-20">
        <div class="p-4 flex flex-col">
            <span class="text-base font-bold">
                المنتجات
            </span>

            <NuxtLink to="/product" class="flex items-center gap-4 p-2 cursor-pointer hover:bg-smooky-50" v-for="item in filteredItems">
                <div class="bg-smooky-50 p-1 w-18">
                    <img class="w-10" :src="item.image" alt="" />
                </div>
                <span class="text-base">
                    {{ item.title }}
                </span>
            </NuxtLink>

            <span class="mt-3 cursor-pointer font-bold">
                رؤية كل النتائج
            </span>
        </div>
    </div>
</template>

<script>
import pprint5 from '~/assets/images/pprint-5.png'
import product5 from '~/assets/images/product-5.png'

export default {
    data(){
        return {
            filteredItems: [
                {
                    title: 'صندوق شحن كامل الألوان',
                    image: product5,
                },
                {
                    title: 'صندوق شحن كامل الألوان',
                    image: pprint5,
                },
                {
                    title: 'صندوق شحن كامل الألوان',
                    image: product5,
                }
            ]
        }
    }
}
</script>