<template>
    <div class="container mx-auto px-4 lg:px-0 py-16">
        <LandingPagePartialsSectionHeader upperTitle="جديدنا" iconless="true" linkless="true" title="منتجات بتصاميم جاهزة"/>
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            <LandingPagePartialsProductItem :item="item" v-for="item in items" />
        </div>
    </div>
</template>

<script setup>
import pprint5 from '~/assets/images/pprint-5.png'
import product5 from '~/assets/images/product-5.png'
import pcard6 from '~/assets/images/prcard-6.png'
import pcard5 from '~/assets/images/prcard-5.png'

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
    }
]
</script>