<template>
    <div>
        <div class="bg-white lg:p-2 xl:p-8 flex flex-col gap-6">
            <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 border-b border-agray-400">
                <div v-for="tab in tabs" 
                @click="activeTab = tab.key"
                :class="[
                    activeTab == tab.key ? 'text-aprimary-600 border-b-4 border-aprimary-600' : '',
                    'whitespace-nowrap p-4 text-sm flex items-center gap-2 cursor-pointer hover:text-aprimary-600 hover:border-b-4 hover:border-aprimary-600'
                ]">
                    <span>{{ tab.label }}</span>
                    <span class="text-aprimary-400 bg-asmooky-100 px-2">{{ tab.number }}</span>
                </div>
            </div>

            <div class="flex items-center gap-4 my-4">
                <span class="font-bold text-sm lg:text-base text-aprimary-600">
                    عدد الطلبات المعروضة في الصفحة
                </span>
                <UiAdminSelect>
                    <template v-slot:selected-option>
                        <span>10 طلب</span>
                    </template>
                    <template v-slot:options>
                        <div class="flex flex-col">
                            <span class="p-2 hover:bg-white">10 طلب</span>
                            <span class="p-2 hover:bg-white">20 طلب</span>
                            <span class="p-2 hover:bg-white">50 طلب</span>
                            <span class="p-2 hover:bg-white">100 طلب</span>
                        </div>
                    </template>
                </UiAdminSelect>
            </div>

            <div class="flex">
                <UiAdminSelect custom-classes="border-2 border-asmooky-200 p-1">
                    <template v-slot:selected-option>
                        <span>فلترة <span class="hidden lg:inline">الطلبات</span></span>
                    </template>
                    <template v-slot:options>
                        <div class="flex flex-col">
                            <span v-for="tab in tabs" class="p-2 hover:bg-asmooky-100">{{ tab.label }}</span>
                        </div>
                    </template>
                </UiAdminSelect>
                <UiAdminInput class="border-2 border-asmooky-200 flex-1" placeholder="ابحث برقم الطلب او باسم العميل او هاتفه او البريد الإلكتروني" />
                <UiAdminActionButton class="lg:w-28">
                    <template #content>
                        <span class="hidden lg:inline">بحث</span> 
                        <span class="block lg:hidden">
                            <Icon name="material-symbols:search" size="1.2rem" />
                        </span>
                    </template>
                </UiAdminActionButton>
            </div>
        </div>
    </div>
</template>

<script setup>
const activeTab = ref('all')
const tabs = [
    {
        label: 'الكل',
        key: 'all',
        number: 0
    },
    {
        label: 'جديد 🎉',
        key: 'new',
        number: 0
    },
    {
        label: 'جاري التجهيز',
        key: 'processing',
        number: 0
    },
    {
        label: 'جاهز',
        key: 'ready',
        number: 0
    },
    {
        label: 'جاري التوصيل',
        key: 'shipping',
        number: 0
    },
    {
        label: 'مكتمل',
        key: 'completed',
        number: 0
    },
    {
        label: 'ملغي',
        key: 'canceled',
        number: 0
    },
    {
        label: 'قيد الاسترجاع',
        key: 'refunding',
        number: 0
    },
    {
        label: 'مسترجع',
        key: 'refunded',
        number: 0
    },
]
</script>