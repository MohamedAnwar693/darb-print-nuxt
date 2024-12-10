<template>
    <div class="container  mx-auto px-4 lg:px-0 py-16">
        <LandingPagePartialsSectionHeader title="مطبوعات ورقية"/>
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            <LandingPagePartialsProductItem :item="item" v-for="item in items" />
        </div>
    </div>
</template>

<script setup>
import pprint1 from '~/assets/images/pprint-1.png'
import pprint2 from '~/assets/images/pprint-2.png'
import pprint3 from '~/assets/images/pprint-3.png'
import pprint4 from '~/assets/images/pprint-4.png'
import pprint5 from '~/assets/images/pprint-5.png'

const items = [
    {
        title: 'صندوق شحن كامل الألوان',
        price: '200 ر.س',
        image: pprint1,
    },
    {
        title: 'بوكس توزيعات مربع 60*60',
        price: '200 ر.س',
        image: pprint2,
    },
    {
        title: 'بوكس سحاب مقاس 16x22x4',
        price: '200 ر.س',
        image: pprint3,
    },
    {
        title: 'بوكس عطر مقاس 12.5x4.8',
        price: '200 ر.س',
        image: pprint4,
    },
    {
        title: 'ملصقات صناديق الشحن',
        price: '200 ر.س',
        image: pprint5,
    }
]
</script>