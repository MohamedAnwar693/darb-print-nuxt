<template>
    <LayoutAdminPageHeader title="اللغات"></LayoutAdminPageHeader>
    <div class="card-style-color p-4 text-agray-300  mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
        <div class="bg-white p-8 text-agray-300  mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-8 mb-12">
                <div class="flex flex-col gap-4 ">
                    <span class="font-bold lg:text-xl text-black">
                        اللغة الافتراضية للمتجر
                    </span>
                    <span>
                        لن تتمك من ترجمة اللغة الافتراضية  بعد ترجمة المحتوى  (منتج, تصنيف, ماركة تجارية  ...)
                    </span>
                    <UiAdminSelect class="text-sm lg:text-base">
                        <template v-slot:selected-option>
                            <Icon name="twemoji:flag-saudi-arabia" size="2rem" />
                            <span>العربية</span>
                        </template>
                        <template v-slot:options>
                            <div class="p-4 flex gap-4 hover:bg-asmooky-100" v-for="language in languages">
                                <Icon :name="language.flag" size="2rem" />
                                <span>{{ language.label }}</span>
                            </div>
                        </template>
                    </UiAdminSelect>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-8 mb-16">
                <div class="flex flex-col gap-2">
                    <div class="grid lg:grid-cols-2 gap-12">
                        <span class="font-bold text-black">
                            اللغات الماحة في المتجر
                        </span>
                        <span class="font-bold text-black">
                            نوع الترجمة
                        </span>
                    </div>
                    <div class="cardStyle mt-3 ">
                        <div class="mt-1">
                            <button  class="text-aprimary-600 px-2">
                                <Icon name="prime:bars" size="2rem" />
                            </button>
                            <Icon name="twemoji:flag-saudi-arabia" size="2rem" />
                            <span class="px-2">العربية</span>
                            <span class="px-2">(اللغة الافتراضية)</span>
                            <span class="">يدوية</span>
                        </div>
                        <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 border-b border-agray-400"></div>
                        <div class="mt-1">
                            <button  class="text-aprimary-600 px-2">
                                <Icon name="prime:bars" size="2rem" />
                            </button>
                            <Icon name="twemoji:flag-united-kingdom" size="2rem" />
                            <span class="px-2">English</span>
                            <span class="px-2 lang-store-style">معطلة</span>
                            <span class=" pr-12">يدوية</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4 text-black px-1">
                    <span class="font-bold lg:text-xl">
                        اضافة لغة جديدة
                    </span>
                    <div class="flex text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="إختر اللغة التي تود اضافتها"></UiAdminInput>
                        <UiAdminActionButton>
                            <template #content>
                                اضافة
                            </template>
                        </UiAdminActionButton>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-2 mt-12 text-left ml-10 mr-10 mb-10">
                <UiAdminActionButton>
                    <template #content>
                        حفظ
                    </template>
                </UiAdminActionButton>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - إنشاء منتج',})

const languages = [
    {
        label: 'English',
        flag: 'twemoji:flag-united-kingdom',
    },
    {
        label: 'العربية',
        flag: 'twemoji:flag-saudi-arabia',
    },
    {
        label: 'الالمانية',
        flag: 'twemoji:flag-germany',
    },
]


</script>

<style scoped>
.card-style-color{
    background: #DFE5EF;
}
.cardStyle{
    height: 75px;
    gap: 0px;
    border: 1px 0px 0px 0px;
    opacity: 0px;
    border: 1px solid #7C8FAC;
}
.cardStyle2{
    height: 72px;
    margin-right: 300px;
    margin-left: 300px;
    position: absolute;
}

.lang-store-style{
    width: 40px;
    height: 10px;
    font-size: 15px;
    border-radius: 18px 18px 18px 18px;
    opacity: 0px;
    background: #EAEFF4;
}

</style>