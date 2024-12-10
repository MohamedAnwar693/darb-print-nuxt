<template>
    <AdminIndexPageSection>
        <template v-slot:title>
            شركات الشحن (اختيارى)
        </template>
        <template v-slot:sub-title>
            قم بتفعيل شركة الشحن المناسبه لك ، يمكنك لاحقاً تغيير او اضافة شركات شحن
        </template>
        <template v-slot:content>
            <div v-for="company in companies" class="flex gap-4 items-center px-5">
                <img class="w-[50px] lg:w-[110px]" :src="company.logo" :alt="company.name" />
                <p class="flex flex-col">
                    <span class="text-lg font-bold">{{ company.name }}</span>
                    <span class="text-sm lg:text-base">{{ company.title }}</span>
                </p>
                <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                    <UiAdminToggler :active="company.active" />
                </div>
            </div>
        </template>
    </AdminIndexPageSection>
</template>

<script setup>
import dhlLogo from '~/assets/dhl-logo.png'
import aramex from '~/assets/aramex-logo.png'
import smsa from '~/assets/smsa-logo.png'
const companies = [
    {
        name: 'DHL Express',
        logo: dhlLogo,
        title: 'نغطى 220 دولة ونوفر خدماتنا داخل المدن وخارجها',
        active: false,
    },
    {
        name: 'ارامكس',
        logo: aramex,
        title: 'نقدم خدمات الشحن المحلية من الباب للباب',
        active: true,
    },
    {
        name: 'سمسا',
        logo: smsa,
        title: 'نغطى جميع  مناطق المملكة بخدمات شحن متعددة',
        active: true,
    }
]
</script>