<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-4">
            <span class="font-extrabold">نظرة عامة حول السلع</span>
            <span>يمكن إجراء أي تعديلات في أي مرحلة من العملية.</span>
        </div>

        <div class="flex flex-col gap-4 max-h-[350px] overflow-y-scroll">
            <GiftBoxOrderPageReviewedItem v-for="item in reviewedItems" :item="item"/>
        </div>

        <hr class="border-smooky-100 border-2 my-5" />

        <div class="flex items-center">
            <span class="font-bold text-2xl">
                المجموع
            </span>
            <span class="bg-primary-200 font-bold px-2 py-1 mr-auto">
                5000 ريال
            </span>
        </div>

        <hr class="border-smooky-100 border-2 my-5" />
        
        <span class="text-sm m-auto">
            لا حاجه لدفع اي مبلغ  - سنتواصل معك لاتمام الطلب
        </span>
    </div>
</template>

<script setup>
import image1 from '~/assets/images/pprint-1.png'
import image2 from '~/assets/images/pprint-2.png'
import image3 from '~/assets/images/pprint-3.png'
const reviewedItems = [
    {
        title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
        price: '200 ر.س',
        quantity: '100',
        image: image1
    },
    {
        title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
        price: '200 ر.س',
        quantity: '100',
        image: image2
    },
    {
        title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
        price: '200 ر.س',
        quantity: '100',
        image: image3
    },
    {
        title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
        price: '200 ر.س',
        quantity: '100',
        image: image1
    },
    {
        title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
        price: '200 ر.س',
        quantity: '100',
        image: image3
    }
]
</script>