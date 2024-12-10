<template>
    <div class="flex flex-col gap-6">
        <h1 class="font-extrabold text-aprimary-600 text-xl">ابدأ بانشاء متجرك الخاص على منصة روّاد “ الوقت المتوقع اقل من خمس دقائق 🤩”</h1>
        <AdminIndexPageProgressBar percentage="10" />
        <AdminIndexPageStoreInfo />
        <AdminIndexPageStoreIdentity />
        <AdminIndexPageShippingCompanies />
        <AdminIndexPagePayments />
        <AdminIndexPagePricing />
        <AdminIndexPageStoreLaunch />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin'
})
useHead({
    title: 'لوحة التحكم - الرئيسية',
})
</script>