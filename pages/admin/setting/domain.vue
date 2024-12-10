<template>
    <LayoutAdminPageHeader title="اعدادات الدومين"></LayoutAdminPageHeader>
    <div class="card-style-color p-4 text-agray-300  mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
        <div class="bg-white p-8 text-agray-300 mb-2 mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 mb-4 mt-2">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            الرابط الحالي
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="www.example.com"></UiAdminInput>
                    </div>
                </div>
                <div class="flex gap-4 items-center mt-11">
                    <div class="flex gap-2 mr-auto border-2  rounded-md border-indigo-300 px-2 py-2">
                        <button class="flex">
                            <img  class="px-2" src="../../../public/images/domain-link-share.png" alt=""/>
                            <span> مشاركة الرابط</span>
                        </button>
                        <div class="vertical inset bg-indigo-300 border-indigo-300 border-2 "></div>
                        <button class="flex">
                            <img class="px-2" src="../../../public/images/copy.png" alt=""/>
                            <span>نسخ الرابط</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-style-color p-4 text-agray-300  mt-12 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">اعدادات الدومين</span>
        <div class="bg-white p-8 text-agray-300 mb-2 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="bg-white p-2" v-for="(section, index) in sections">
                <div :class="[index == 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2', 'grid gap-12 my-2']">
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
        <span class="font-bold lg:text-xl px-2 mt-2">إدارة الـ DNS</span>
        <div class="bg-white p-8 text-agray-300 mb-2 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="flex gap-4 items-center px-5">
                <button class="update-dns flex gap-2 mr-auto px-3 py-1">
                    <img  src="../../../public/images/domains/reload-white-domain.png" alt=""/>
                    <span class="text-white text-md">تحديث بيانات الDNS</span>
                </button>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 mb-4">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            IPv4 address
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="IPv4 address"></UiAdminInput>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            Name
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="Name"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 mb-4">
                <label class="flex flex-col gap-2  px-5">
                    <span class="font-bold text-lg">Type</span>
                    <UiAdminSelect>
                        <template v-slot:selected-option>
                            <span>A</span>
                        </template>
                        <template v-slot:options>
                            <div class="p-4 flex gap-4 hover:bg-asmooky-100" v-for="domain in domains">
                                <span>{{ domain.label }}</span>
                            </div>
                        </template>
                    </UiAdminSelect>
                </label>
            </div>
            <div class="lg:col-span-2 mt-12 text-left ml-6 mr-8 mb-2">
                <UiAdminActionButton>
                    <template #content>
                        ADD
                    </template>
                </UiAdminActionButton>
            </div>
            <div class="p-2 text-agray-300  mt-2 flex flex-col gap-8 animate__animated animate__slideInDown">
                <UiAdminTable :tableHeadColumns="tableHeadColumns">
                    <template #rows>
                        <tr v-for="dns in  client_domains">
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                {{ dns.type }}
                            </td>
                            <td>
                                {{ dns.name }}
                            </td>
                            <td>
                                {{ dns.content }}
                            </td>
                            <td>
                                <UiAdminSelect custom-classes="border-none bg-aprimary-600 text-white">
                                    <template v-slot:selected-option>
                                        <span class="font-bold">الإجراءات</span>
                                    </template>
                                    <template v-slot:options>
                                        <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                                            <span>حذف</span>
                                        </div>
                                        <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                                            <span>تعديل</span>
                                        </div>
                                    </template>
                                </UiAdminSelect>
                            </td>
                        </tr>
                    </template>
                </UiAdminTable>
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الإعدادات',})


const sections = [
    {
        img: '../../../public/images/vector-arrow.png',
        links: [
            {
                label: 'العودة إلى دومين رواد',
                description: 'يمكنك العودة إلى دومين رواد و تغيير رابط متجرك',
                icon: '../../../public/images/domains/reload-domain.png',
                link: '/admin/settings',
            },
            {
                label: 'نقل دومين إلى رواد',
                description: 'اذا كان لديك دومين من مزود خدمة اخر يمكنك نقله الى رواد, و بالتالي ستتمكن من إدارة الدومين و تجديد الاشتراك من خلال السنة',
                icon: '../../../public/images/domains/move-domain.png',
                link: '/admin/settings',
            },
            {
                label: 'ربط دومين من خارج رواد',
                description: 'اذا كان لديك دومين من مزود خدمة اخر يمكنك ربطه  برواد, و ستبقى  إدارة الدومين و تجديد الاشتراك من خلال مزود الخدمة',
                icon: '../../../public/images/domains/link-domain.png',
                link: '/admin/settings',
            },
            {
                label: 'احصل على دومين خاص بـ.  رس / سنويًا فقط',
                description: 'يمكنك الحصول على  دومين خاص بـ.  رس / سنويًا فقط',
                icon: '../../../public/images/domains/buy-domain.png',
                link: '/admin/settings',
            }
        ]
    },
]

const domains = [
    {
        label: 'A',
    },
    {
        label: 'AAA',
    },
    {
        label: 'AAAA',
    }
]

const tableHeadColumns = [
    {
        label: 'Type',
        key: 'type',
    },
    {
        label: 'NAME',
        key: 'name',
    },
    {
        label: 'Content',
        key: 'content',
    },
]
const client_domains = [
    {
        type: 'CNAME',
        name: 'www.jamalik.co',
        content: 'jamalik.co',
    },
    {
        type: 'CNAME',
        name: 'www.jamalik.co',
        content: 'jamalik.co',
    },
    {
        type: 'CNAME',
        name: 'www.jamalik.co',
        content: 'jamalik.co',
    },
]

</script>

<style scoped>
.card-style-color{
    background: #DFE5EF;
}

.update-dns{
    border-radius: 38px 38px 38px 38px;
    opacity: 0px;
    background: #5D87FF;
}
</style>
