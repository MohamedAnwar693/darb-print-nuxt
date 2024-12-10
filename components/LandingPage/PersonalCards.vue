<template>
    <div class="container mx-auto px-4 lg:px-0 py-16">
        <LandingPagePartialsSectionHeader title="كروت شخصية"/>
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            <LandingPagePartialsProductItem :item="item" v-for="item in items" /> 
        </div>
    </div>
</template>


<script setup>
import pcard1 from '~/assets/images/pcard-1.png'
import pcard2 from '~/assets/images/pcard-2.png'
import pcard3 from '~/assets/images/pcard-3.png'
import pcard4 from '~/assets/images/pcard-4.png'
import pcard5 from '~/assets/images/pcard-5.png'

const items = [
    {
        title: 'كرت شخصي ستاندر',
        price: '200 ر.س',
        image: pcard1,
    },
    {
        title: 'كرت بريستول',
        price: '200 ر.س',
        image: pcard2,
    },
    {
        title: 'كرت مقمش',
        price: '200 ر.س',
        image: pcard3,
    },
    {
        title: 'كرت بلاستيك',
        price: '200 ر.س',
        image: pcard4,
    },
    {
        title: 'كرت مربع بزوايا دائرية',
        price: '200 ر.س',
        image: pcard5,
    }
]
</script>