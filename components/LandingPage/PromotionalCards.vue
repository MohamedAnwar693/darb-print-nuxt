<template>
    <div class="container mx-auto px-4 lg:px-0 py-16">
        <LandingPagePartialsSectionHeader title="هدايا دعائية"/>
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            <Product :product="product" v-for="product in products?.data?.taxonomy[0]?.meta?.map(meta => meta.products[0])" />
        </div>
    </div>
</template>
<script setup>
import {api} from '~/plugins/api'

const { data: products } = await useAsyncData(
   'promotional_products',
    () => $fetch(api.categories.promotional_cards)
)
</script>