<template>
    <LayoutAdminPageHeader title="المحفظة والفواتير"></LayoutAdminPageHeader>

    <div class="card-style-color p-4 text-agray-300  mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">رصيد المتجر</span>
        <div class="bg-white p-8 text-agray-300  mb-4 flex flex-col gap-8 animate__animated animate__slideInDown">
            <label class="flex  gap-4 mx-auto">
                <span class="font-style text-center">120</span>
                <span class="font-bold mt-10 font-text-style text-center">ر.س</span>
            </label>

            <div class="grid lg:grid-cols-2 gap-12 mx-auto">
                <div class=" text-left">
                    <UiAdminActionButton class="rounded-md">
                        <template #content>
                            اضافة رصيد
                        </template>
                    </UiAdminActionButton>
                </div>
                <div class=" text-right ">
                    <UiAdminActionButton class="rounded-md">
                        <template #content>
                            سحب رصيد
                        </template>
                    </UiAdminActionButton>
                </div>
            </div>
            <p class="flex lg:text-xl font-bold px-6 mx-auto">
                <img  class="px-2 h-8 w-15 mt-1" src="../../../public/images/wallet-bills/bx-briefcase.png" size="2.2rem" alt=""/>
                <NuxtLink to="/admin/settings" class="mt-2 underline">سجل العمليات</NuxtLink>
            </p>
        </div>
    </div>

    <div class="card-style-color p-4 text-agray-300  mt-12 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">رصيد المدفوعات الإلكترونية</span>
        <div class="bg-white p-8 text-agray-300  mb-4 flex flex-col gap-8 animate__animated animate__slideInDown">
            <label class="flex  gap-4 mx-auto pl-14">
                <span class="font-style text-center">1922</span>
                <span class="font-bold mt-10 font-text-style text-center">ر.س</span>
            </label>
            <div class="grid lg:grid-cols-2 gap-12 mx-auto">
                <div class=" text-left">
                    <UiAdminActionButton class="rounded-md">
                        <template #content>
                            التحويل لرصيد المتجر
                        </template>
                    </UiAdminActionButton>
                </div>
                <div class=" text-right ">
                    <UiAdminActionButton class="rounded-md">
                        <template #content>
                            سحب رصيد
                        </template>
                    </UiAdminActionButton>
                </div>
            </div>
            <p class="flex lg:text-xl font-bold px-6 mx-auto pl-14">
                <img  class="px-2 h-8 w-15 mt-1" src="../../../public/images/wallet-bills/bx-briefcase.png" size="2.2rem" alt=""/>
                <NuxtLink to="/admin/settings" class="mt-2 underline">سجل العمليات</NuxtLink>
            </p>
        </div>
    </div>

    <div class="card-style-color p-4 text-agray-300  mt-12 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">إعدادات الفوترة</span>
        <div class="bg-white p-8 text-agray-300 mb-2 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="bg-white p-2" v-for="(section, index) in sections">
                <div :class="[index == 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-3', 'grid gap-4 my-2']">
                    <NuxtLink :to="link.link" :class="index == 0 ? 'border' : 'border-transparent'" class="hover:bg-agray-200 border p-4 lg:p-8 flex items-center gap-4" v-for="link in section.links">
                        <span class="text-aprimary-600">
                            <img :src="link.icon" size="2.2rem" alt=""/>
                        </span>
                        <div class="flex flex-col gap-2">
                            <span class="font-bold">
                                {{ link.label }}
                            </span>
                            <span>
                                {{ link.description }}
                            </span>
                        </div>
                        <div class="text-aprimary-600 mr-auto">
                            <img :src="section.img" size="2.2rem" alt=""/>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>

    <div class="card-style-color p-4 text-agray-300  mt-12 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">وسائل التواصل</span>
        <div class="bg-white p-8 text-agray-300  mb-4 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 ">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            تفاصيل الاشتراك
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="رواد برو"></UiAdminInput>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            مدة الاشتراك
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="مفتوح"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 ">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            تاريخ الإشتراك
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="2022-10-01"></UiAdminInput>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            تاريخ التجديد القادم
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="2023-10-01"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 ">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            رسوم الاشتراك
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="2500ر,س"></UiAdminInput>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card-style-color p-4 text-agray-300  mt-12 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">الاشتراكات المفعلة</span>
        <div class="bg-white p-8 text-agray-300 mb-2 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="flex flex-col gap-4 ">
                <NuxtLink to="/admin/settings" class="mt-2 ">
                    <div v-for="subscription in active_subscriptions" class="flex gap-4 items-center px-5">
                        <div class="flex flex-col">
                            <span class="font-bold text-3xl">{{ subscription.name }}</span>
                            <div class="flex">
                                <span class="mt-4 pl-4 font-bold lg:text-md">{{ subscription.description }}</span>
                                <span class="mt-3 subscription_status_link">فعال</span>    
                            </div>
                        </div>
                        <div class="mr-auto my-4">
                            <img :src="subscription.img" size="2.2rem" alt=""/>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
    <div>{{ data }}</div>
</template>

<script setup>
import {get} from "../../../server/api";

definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الإعدادات',})

const data = await get();

const sections = [
    {
        img: '../../../public/images/vector-arrow.png',
        links: [
            {
                label: 'طريقة الدفع الافتراضية',
                description: 'البطاقة الائتمانية',
                icon: '../../../public/images/wallet-bills/wallet-payment.png',
                link: '/admin/settings',
            },
            {
                label: 'البطاقة الائتمانية',
                description: null,
                icon: '../../../public/images/wallet-bills/wallet-credit.png',
                link: '/admin/settings',
            },
            {
                label: 'الحساب البنكي لاستقبال المبالغ',
                description: null,
                icon: '../../../public/images/wallet-bills/wallet-account.png',
                link: '/admin/settings',
            },
            {
                label: 'البريد الالكتروني لاستلام الفواتير',
                description: null,
                icon: '../../../public/images/wallet-bills/wallet-mail.png',
                link: '/admin/settings',
            },
            {
                label: 'عنوان الشركة',
                description: null,
                icon: '../../../public/images/wallet-bills/wallet-address.png',
                link: '/admin/settings',
            },
        ]
    },
]

const active_subscriptions = [
    {
        img: '../../../public/images/vector-arrow.png',
        name: 'رواد برو',
        description: 'حالة الاشتراك:',
        link: '/admin/settings',
    },
]
</script>

<style scoped>
.card-style-color{
    background: #DFE5EF;
}

.font-style{
    font-size: 80px;
    color: rgb(24, 24, 24);
}
.font-text-style{
    font-size: 40px;
}


.subscription_status_link{
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 3px;
    padding-bottom: 3px;
    border-radius: 38px 38px 38px 38px;
    opacity: 0px;
    background: #3BFE1C;
    color: white;
}
</style>