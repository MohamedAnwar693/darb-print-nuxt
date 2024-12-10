<template>
    <div class="bg-asmooky-200 py-8 px-4">
        <LayoutAdminPageHeader title="التحليلات" />
        
        <div class="my-8">
            <button class="bg-aprimary-600 text-white font-bold px-6 py-4">
                المبيعات
            </button>

            <div class="flex flex-col gap-8 my-8">
                <div class="bg-white p-4">
                    <div class="flex gap-4">
                        <UiAdminDateInput label="من تاريخ" />
                        <UiAdminDateInput label="إلى تاريخ" />
                    </div>
                </div>

                <div v-for="item in analytics" class="bg-white p-6">
                    <div class="flex flex-col gap-4 text-agray-300">
                        <h2 class="font-bold text-2xl">{{ item.amount }}  {{ item.label }}</h2>
                        <span>{{ item.title }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - التحليلات',})
const analytics = [
    {
        amount: 0,
        label: 'ر.س',
        title: 'إجمالي المبيعات',
    },
    {
        amount: 0,
        label: 'طلب',
        title: 'عدد الطلبات',
    },
    {
        amount: 0,
        label: 'ر.س',
        title: 'إجمالى قيمة قسائم التخفيض',
    },
    {
        amount: 0,
        label: 'ر.س',
        title: 'إجمالى ضريبة القيمة المضافة',
    },
    {
        amount: 0,
        label: 'ر.س',
        title: 'إجمالى قيمة مصاريف الشحن',
    },
    {
        amount: 0,
        label: 'ر.س',
        title: 'إجمالى رسوم الدفع عند الإستلام',
    },
    {
        amount: 0,
        label: 'ر.س',
        title: 'متوسط حجم سلة المشتريات',
    },
]
</script>