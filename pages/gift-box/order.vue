<template>
    <div class="flex-1">
        <div class="container mx-auto py-6 px-4 md:px-2 lg:px-0">
            <LayoutDefaultHistory class="text-xs lg:text-base whitespace-nowrap">
                <template v-slot:links>
                    <NuxtLink to="/gift-box">
                        <client-only>
                            <fa-icon class="mx-2 lg:mx-4" :icon="['fas', 'angle-left']" />
                        </client-only>
                        <span>بناء صندوق الهدايا</span>
                    </NuxtLink>
                    <NuxtLink>
                        <client-only>
                            <fa-icon class="mx-2 lg:mx-4" :icon="['fas', 'angle-left']" />
                        </client-only>
                        <span class="text-smooky-300">بيانات الطلب</span>
                    </NuxtLink>
                </template>
            </LayoutDefaultHistory>
            <div class="grid lg:grid-cols-12 gap-8 p-4 lg:p-0">
                <GiftBoxOrderPageOrderDataForm class="lg:col-span-8 lg:border-l-2 lg:border-smooky-100 lg:px-16 " />
                <GiftBoxOrderPageOrderView class="lg:sticky lg:top-5 lg:max-h-[60vh] lg:col-span-4" />
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'بناء صندوق الهدايا - بيانات الطلب'
})
</script>