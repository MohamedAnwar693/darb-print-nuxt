<template>
    <div>
        <h2 class="font-bold text-lg lg:text-xl text-aprimary-600">
            عنوان  العميل
        </h2>
        <div class="flex flex-col gap-8 mt-10">
            <!-- shipping address ///////// -->
            <div class="flex flex-col gap-4 ">
                <span class="font-bold lg:text-xl text-black">
                    عنوان التوصيل
                </span>
                <div class="grid lg:grid-cols-2 gap-8 text-sm lg:text-base">
                    <UiAdminInput class="flex-1" style="height: 150px;" placeholder="السعودية الرياض    اليرموك_..."></UiAdminInput>
                    <UiAdminInput class="flex-1" style="height: 150px;" placeholder="السعودية الرياض    اليرموك_..."></UiAdminInput>
                </div>
            </div>

            <!-- new address ///////// -->
            <div class="flex flex-col gap-4 ">
                <span class="font-bold lg:text-xl text-black">
                    عنوان جديد
                </span>
                <div class="grid lg:grid-cols-2 gap-4">
                    <!-- country /// -->
                    <div class="flex-1 flex items-center border-2 border-asmooky-200 gap-4 text-sm lg:text-base">
                        <span class="lg:w-28 px-3 font-bold">الدولة</span>
                        <UiAdminSelect class="flex-1" custom-classes="border-transparent border-r-asmooky-200">
                            <template v-slot:selected-option>
                                <span>اختر</span>
                            </template>
                            <template v-slot:options>
                                <div class="p-4 flex gap-4 hover:bg-asmooky-100" v-for="country in countries">
                                    <Icon :name="country.flag" size="2rem" />
                                    <span>{{ country.label }}</span>
                                </div>
                            </template>
                        </UiAdminSelect>
                    </div>

                    <!-- city /////// -->
                    <div class="flex-1 flex items-center border-2 border-asmooky-200 gap-4 text-sm lg:text-base">
                        <span class="lg:w-28 px-3 font-bold">المدينة</span>
                        <UiAdminSelect class="flex-1" custom-classes="border-transparent border-r-asmooky-200">
                            <template v-slot:selected-option>
                                <span>اختر</span>
                            </template>
                            <template v-slot:options>
                                <div class="p-4 flex gap-4 hover:bg-asmooky-100" v-for="city in cities">
                                    <span>{{ city.label }}</span>
                                </div>
                            </template>
                        </UiAdminSelect>
                    </div>

                    <!-- city /////// -->
                    <div class="flex-1 flex items-center border-2 border-asmooky-200 gap-4 text-sm lg:text-base">
                        <span class="lg:w-28 px-3 font-bold">الحي</span>
                        <UiAdminInput class="flex-1 border-transparent border-r-asmooky-200"></UiAdminInput>
                    </div>

                    <!-- city /////// -->
                    <div class="flex-1 flex items-center border-2 border-asmooky-200 gap-4 text-sm lg:text-base">
                        <span class="lg:w-28 px-3 font-bold">الشارع</span>
                        <UiAdminInput class="flex-1 border-transparent border-r-asmooky-200"></UiAdminInput>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const countries = [
    {
        label: 'الجزائر',
        flag: 'twemoji:flag-algeria',
    },
    {
        label: 'الإمارات العربية المتحدة',
        flag: 'twemoji:flag-united-arab-emirates',
    },
    {
        label: 'مصر',
        flag: 'twemoji:flag-egypt',
    },
    {
        label: 'ألمانيا',
        flag: 'twemoji:flag-germany',
    },
    {
        label: 'الهند',
        flag: 'twemoji:flag-india',
    }
]

const cities = [
    {
        label: 'المدينة المنورة',
    },
    {
        label: 'الطائف',
    },
    {
        label: 'مكة',
    },
    {
        label: 'الرياض',
    },
    {
        label: 'تبوك',
    }
]
</script>