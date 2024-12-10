<template>
    <div class="text-agray-300">
        <LayoutAdminPageHeader class="p-4" title="سوق الخدمات">
            <template #action-buttons>
                <UiAdminActionButton>
                    <template #content>
                        إدارة الخدمات
                    </template>
                </UiAdminActionButton>
            </template>
        </LayoutAdminPageHeader>
        <img class="w-full" src="~/assets/images/services-poster.png" alt="" />
        <div class="my-8">
            <div class="grid grid-cols-5 border-2 border-b-0 border-asmooky-300 lg:border-0">
                <div @click="activeTab = tab.key" v-for="tab in tabs" :class="[tab.key == activeTab && 'bg-white','cursor-pointer hover:bg-white lg:p-4']">
                    <div class="flex flex-col gap-4 text-center p-4 lg:p-8" :style="`background-color: ${tab.bgColor};`">
                        <img class="w-8 lg:w-16 mx-auto" :src="tab.image" alt="" />
                        <span class="hidden lg:block text-xs lg:text-base font-bold text-aprimary-600">{{ tab.label }}</span>
                    </div>
                </div>
            </div>
            <div class="p-4 bg-white">
                <div v-if="activeTab == 'personalization'">
                    <span class="font-bold text-lg">
                        شرح الباقات  :
                    </span>
                    <UiAdminPricing />
                </div>
                <div class="min-h-[450px]" v-if="activeTab == 'video'"></div>
                <div class="min-h-[450px]" v-if="activeTab == 'marketing'"></div>
                <div class="min-h-[450px]" v-if="activeTab == 'support'"></div>
                <div class="min-h-[450px]" v-if="activeTab == 'accounting'"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - سوق الخدمات'})

import personalization from '~/assets/images/Windows 10 Personalization.png'
import accounting from '~/assets/images/Accounting.png'
import workspace from '~/assets/images/Workspace.png'
import commercial from '~/assets/images/Commercial.png'
import video from '~/assets/images/Video.png'

const activeTab = ref('personalization')
const tabs = [
    {
        label: 'التصميم الجرافيكي',
        key: 'personalization',
        image: personalization,
        bgColor: '#ebf3fe',
    },
    {
        label: 'تحرير الفيديو',
        key: 'video',
        image: video,
        bgColor: '#fbf2ef',
    },
    {
        label: 'التسويق الإلكتروني',
        key: 'marketing',
        image: commercial,
        bgColor: '#e6fffa',
    },
    {
        label: 'المساعدة عن بعد',
        key: 'support',
        image: workspace,
        bgColor: '#ecf2ff',
    }
    ,
    {
        label: 'المحاسبة',
        key: 'accounting',
        image: accounting,
        bgColor: '#fef5e5',
    }
]
</script>