<template>
    <div class="flex-1">
        <CategoriesPageHeader :activeCategoy="activeCategoy"/>

        <div class="container mx-auto my-12 text-smooky-800 px-2 lg:px-0">
            <div class="lg:flex items-center">
                <h2 class="title">{{ activeCategoy  }}</h2>

                <div class="mr-auto flex items-center gap-4">
                    <span class="text-base lg:text-2xl my-8 lg:my-0">ترتيب</span>
                    <UiSelect dropdownClasses="w-64" class="border border-smooky-250 p-2 w-64">
                        <template v-slot:selected-option>
                            <span class="font-bold">
                                مقترحاتنا
                            </span>
                        </template>
                        <template class="flex flex-col" v-slot:options>
                            <div class="flex items-center cursor-pointer bg-primary-800 text-white p-2 hover:bg-primary-800 hover:text-white">
                                <span>مقترحاتنا</span>
                                <client-only>
                                    <fa-icon class="mr-auto" :icon="['fas', 'check']" />
                                </client-only>
                            </div>
                            <div class="flex items-center cursor-pointer bg-white p-2 hover:bg-primary-800 hover:text-white">الأعلى مبيعا</div>
                            <div class="flex items-center cursor-pointer bg-white p-2 hover:bg-primary-800 hover:text-white">الأعلى تقييما</div>
                            <div class="flex items-center cursor-pointer bg-white p-2 hover:bg-primary-800 hover:text-white">السعر من الأعلى إلى الأقل</div>
                            <div class="flex items-center cursor-pointer bg-white p-2 hover:bg-primary-800 hover:text-white">السعر من الأقل إلى الأعلى</div>
                        </template>
                    </UiSelect>
                </div>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
                <LandingPagePartialsProductItem :item="item" v-for="item in items" />
            </div>
        </div>
    </div>
</template>

<script setup>
import pprint5 from '~/assets/images/pprint-5.png'
import product5 from '~/assets/images/product-5.png'
import pcard6 from '~/assets/images/prcard-6.png'
import pcard5 from '~/assets/images/prcard-5.png'

const activeCategoy = 'أقلام'

const items = [
    {
        title: 'صندوق شحن كامل الألوان',
        price: '200 ر.س',
        image: product5,
    },
    {
        title: 'صندوق شحن كامل الألوان',
        price: '200 ر.س',
        image: pprint5,
    },
    {
        title: 'صندوق شحن كامل الألوان',
        price: '200 ر.س',
        image: product5,
    },
    {
        title: 'صندوق شحن كامل الألوان',
        price: '200 ر.س',
        image: pcard6,
    },
    {
        title: 'صندوق شحن كامل الألوان',
        price: '200 ر.س',
        image: pcard5,
    },
    {
        title: 'صندوق شحن كامل الألوان',
        price: '200 ر.س',
        image: product5,
    },
    {
        title: 'صندوق شحن كامل الألوان',
        price: '200 ر.س',
        image: pprint5,
    },
    {
        title: 'صندوق شحن كامل الألوان',
        price: '200 ر.س',
        image: product5,
    },
    {
        title: 'صندوق شحن كامل الألوان',
        price: '200 ر.س',
        image: pcard6,
    },
    {
        title: 'صندوق شحن كامل الألوان',
        price: '200 ر.س',
        image: pcard5,
    }
]

useHead({
  title: 'التصنيفات',
})
</script>