<template>
    <div class="flex-1">
        <div class="container mx-auto py-6 px-4 lg:px-0">
            <LayoutDefaultHistory class="text-xs lg:text-base whitespace-nowrap">
                <template v-slot:links>
                    <NuxtLink>
                        <client-only>
                            <fa-icon class="mx-2 lg:mx-4" :icon="['fas', 'angle-left']" />
                        </client-only>
                        <span class="text-smooky-300">طلبات الشركات</span>
                    </NuxtLink>
                </template>
            </LayoutDefaultHistory>
            <div class="grid lg:grid-cols-12 gap-8 p-4 lg:p-0">
                <CompanySalesPageOrderDataForm class="lg:col-span-8 lg:border-l-2 lg:border-smooky-100 lg:px-16 " />
                <div class="hidden lg:block bg-primary-100 lg:col-span-4 flex items-center text-center py-8">
                    <span class="text-lg lg:text-6xl m-auto">
                        نضع هنا تصميم مخصص مناسب 
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'بناء صندوق الهدايا - بيانات الطلب'
})
</script>