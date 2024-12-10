<template>
    <LayoutAdminPageHeader title="الخدمات الاحصائية"></LayoutAdminPageHeader>
    <div class="card-style-color p-4 text-agray-300  mt-8 flex flex-col gap-8 animate__animated animate__slideInDown">
        <div class="bg-white p-8 mt-4 text-agray-300 mb-2  flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 mb-4 mt-2">
                <div class="flex flex-col gap-4 ">
                    <div v-for="google in google_analytics " class="flex gap-4 items-center px-5">
                        <img  src="../../../public/images/google-analytics.png" alt=""/>
                        <p class="flex flex-col">
                            <span class="text-lg">{{ google.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="google.active" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4 ">
                    <div v-for="facebook in facebook_pixel" class="flex gap-4 items-center px-5">
                        <img  src="../../../public/images/facebook-pixel.png" alt=""/>
                        <p class="flex flex-col">
                            <span class="text-lg">{{ facebook.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="facebook.active" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الإعدادات',})

const google_analytics = [
    {
        name: 'Google analytics ',
        active: true,
    },
]

const facebook_pixel = [
    {
        name: 'Facebook pixel',
        active: true,
    },
]

</Script>

<style scoped>
.card-style-color{
    background: #DFE5EF;
}

</style>