<template>
    <div class="text-agray-300">
        <LayoutAdminPageHeader class="p-4" title="تصميم المتجر" sub-title="صمم متجرك كما تريد" />
        <img class="w-full" src="~/assets/images/store-design-poster.png" alt="" />

        <div class="my-8">
            <div class="flex items-center">
                <div @click="activeTab = tab.key" :class="activeTab == tab.key && 'bg-white font-bold'" class="p-4 cursor-pointer" v-for="tab in tabs">
                    {{ tab.label }}
                </div>
            </div>
            <div class="bg-white lg:px-8 lg:py-12">
                <AdminStoreDesignPageStoreTab v-if="activeTab == 'store_design'" />
                <AdminStoreDesignPagePagesTab v-if="activeTab == 'pages_design'" />
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - تصميم المتجر'})
const activeTab = ref('store_design')
const tabs = [
    {
        label: 'تصميم المتجر',
        key: 'store_design',
    },
    {
        label: 'تصميم الصفحات',
        key: 'pages_design',
    },
]
</script>