<template>
    <div class="flex flex-col gap-8 text-agray-300 p-2 xl:p-4">
        <LayoutAdminPageHeader title="سوق التطبيقات">
            <template #action-buttons>
                <UiAdminActionButton>
                    <template #content>
                        <span>إدارة التطبيقات</span>
                    </template>
                </UiAdminActionButton>
            </template>
        </LayoutAdminPageHeader>

        <div class="bg-white p-4">
            <label class="flex flex-col gap-2 lg:w-1/2 mt-8">
                <span>تصفح التطبيقات حسب التصنيف او ابحث عن التطبيق</span>
                <div class="relative">
                    <UiAdminInput class="w-full" placeholder="ابحث عن تطبيق" />
                    <Icon class="absolute left-0 top-0 m-3" name="material-symbols:search-rounded" size="1.2rem" />
                </div>
            </label>

            <div class="grid lg:grid-cols-3 gap-3 lg:gap-12 my-4 lg:my-12">
                <div class="p-4 lg:p-8 bg-agray-200 flex items-center gap-2 text-aprimary-600" v-for="category in applicationsCategories">
                    <Icon :name="category.icon" size="1.4rem" />
                    <span>{{ category.label }}</span>
                    <span>({{ category.applications_count }})</span>
                </div>
            </div>
        </div>

        <div class="bg-white p-4">
            <span class="font-bold text-xl">
                تطبيقات البيكسل 
            </span>
            <div class="grid lg:grid-cols-2 gap-4">
                <div class="flex flex-col gap-2 p-4" v-for="application in pixelApplications">
                    <div class="flex items-center gap-4">
                        <img :src="application.logo" alt="" class="w-16" />
                        <div class="flex flex-col gap-2">
                            <div class="flex items-center gap-2 text-green-400">
                                <div class="flex items-center gap-2 text-yellow-400">
                                    <Icon name="ic:baseline-star" size="1.3rem" />
                                </div>
                                {{ application.review }}
                            </div>
                            <div class="flex gap-4 text-sm gap-2">
                                <button class="bg-agray-200 p-1">
                                    تطبيق مجاني
                                </button>
                                <UiAdminActionButton>
                                    <template #content>
                                        تفعيل
                                    </template>
                                </UiAdminActionButton>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <span class="font-bold">
                            {{ application.label }}
                        </span>
                        <span>
                            {{ application.author }}
                        </span>
                        <p>
                            {{ application.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - سوق التطبيقات'})
import fbLogo from '~/assets/images/fb-logo.png'
import snapLogo from '~/assets/images/snapchat-logo.png'
import tiktokLogo from '~/assets/images/tiktok-logo.png'

const applicationsCategories = [
    {
        label: 'المحاسبة',
        icon: 'material-symbols:calculate-outline',
        applications_count: 10,
    },
    {
        label: 'الإنتاجية',
        icon: 'material-symbols:list-alt-outline',
        applications_count: 2,
    },
    {
        label: 'الإنتاجية',
        icon: 'material-symbols:list-alt-outline',
        applications_count: 2,
    },
    {
        label: 'الإنتاجية',
        icon: 'material-symbols:list-alt-outline',
        applications_count: 2,
    },
    {
        label: 'الإنتاجية',
        icon: 'material-symbols:list-alt-outline',
        applications_count: 2,
    },
    {
        label: 'الإنتاجية',
        icon: 'material-symbols:list-alt-outline',
        applications_count: 2,
    },
]
const pixelApplications = [
    {
        label: 'بيكسل سناب شات',
        logo: snapLogo,
        author: 'تطوير فريق رواد ',
        description: 'سناب شات بكسل خدمة تمكنك من تحسين وقياس فاعلية الحملات الإعلانية لزوار متجرك',
        review: '5',
    },
    {
        label: 'TikTok pixel',
        logo: tiktokLogo,
        author: '',
        description: 'تيك توك بكسل خدمة تمكنك من تحسين وقياس فاعلية الحملات الإعلانية لزوار متجرك',
        review: '4',
    },
    {
        label: 'فيس بوك بكسل',
        logo: fbLogo,
        author: '',
        description: 'فيس بوك بكسل خدمة تمكنك من تحسين وقياس فاعلية الحملات الإعلانية لزوار متجرك',
        review: '5',
    },
]
</script>