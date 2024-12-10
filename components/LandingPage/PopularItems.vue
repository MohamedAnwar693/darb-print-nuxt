<template>
    <div class="container mx-auto px-4 lg:px-0 py-16">
        <LandingPagePartialsSectionHeader title="المنتجات الأكثر طلبا"/>
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            <LandingPagePartialsProductItem :item="item" v-for="item in items" />
        </div>
    </div>
</template>

<script setup>
import product1 from '~/assets/images/product-1.png'
import product2 from '~/assets/images/product-2.png'
import product3 from '~/assets/images/product-3.png'
import product4 from '~/assets/images/product-4.png'
import product5 from '~/assets/images/product-5.png'

const items = [
    {
        title: 'كوب ريترو 350 مللي معدني',
        price: '200 ر.س',
        image: product1,
    },
    {
        title: 'كوب ريترو 350 مللي معدني',
        price: '200 ر.س',
        image: product2,
    },
    {
        title: 'كوب ريترو 350 مللي معدني',
        price: '200 ر.س',
        image: product3,
    },
    {
        title: 'كوب ريترو 350 مللي معدني',
        price: '200 ر.س',
        image: product4,
    },
    {
        title: 'كوب ريترو 350 مللي معدني',
        price: '200 ر.س',
        image: product5,
    },
    {
        title: 'كوب ريترو 350 مللي معدني',
        price: '200 ر.س',
        image: product1,
    },
    {
        title: 'كوب ريترو 350 مللي معدني',
        price: '200 ر.س',
        image: product2,
    },
    {
        title: 'كوب ريترو 350 مللي معدني',
        price: '200 ر.س',
        image: product3,
    },
    {
        title: 'كوب ريترو 350 مللي معدني',
        price: '200 ر.س',
        image: product4,
    },
    {
        title: 'كوب ريترو 350 مللي معدني',
        price: '200 ر.س',
        image: product5,
    }
]
</script>