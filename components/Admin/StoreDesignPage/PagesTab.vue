<template>
    <div class="w-full overflow-x-scroll whitespace-nowrap">
        <table class="w-full" >
            <thead>
                <tr>
                    <td v-for="column in tableHeadColumns">
                        <span class="font-bold text-aprimary-600">
                            {{ column.label }}
                        </span>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(page, index) in pages">
                    <td class="font-bold">{{ page.name }}</td>
                    <td>
                        <UiAdminSelect>
                            <template v-slot:selected-option>
                                <span>قالب رواد الإفتراضي</span>
                            </template>
                            <template v-slot:options>
                                <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                                    <span>قالب 1</span>
                                </div>
                                <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                                    <span>قالب 2</span>
                                </div>
                                <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                                    <span>قالب 3</span>
                                </div>
                            </template>
                        </UiAdminSelect>
                    </td>
                    <td style="padding: 0px; padding-top: 38px;" class="lg:w-[450px]" v-if="index == 0" :rowspan="pages.length">
                        <img src="~/assets/images/template-preview.png" alt="" class="block h-full"/>
                    </td>
                    <td>
                        <div class="flex gap-2">
                            <UiAdminActionButton>
                                <template #content>
                                    تأكيد
                                </template>
                            </UiAdminActionButton>
        
                            <UiAdminActionButton type="danger">
                                <template #content>
                                    حذف
                                </template>
                            </UiAdminActionButton>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="lg:col-span-2 mt-12 mb-8 text-center">
            <UiAdminActionButton>
                <template #content>
                    حفظ التغييرات
                </template>
            </UiAdminActionButton>
        </div>
    </div>
</template>

<style scoped>
table td, table th{
    @apply p-8;
}
tbody{
    @apply border-2 border-agray-200;
}
tr{
    @apply border-b-2 border-agray-200 bg-clip-padding;
}
</style>
<script setup>
const tableHeadColumns = [
    {
        label: 'اسم الصفحة',
        key: 'name',
    },
    {
        label: 'القالب',
        key: 'template',
    },
    {
        label: 'معاينة',
        key: 'preview',
    },
    {
        label: 'إجراءات',
        key: 'actions',
    }
]

const pages = [
    {
        name: 'الرئيسية',
        template: 'قالب رواد الإفتراضي'
    },
    {
        name: 'التحليلات',
        template: 'قالب رواد الإفتراضي'
    },
    {
        name: 'الطلبات',
        template: 'قالب رواد الإفتراضي'
    },
    {
        name: 'المنتجات',
        template: 'قالب رواد الإفتراضي'
    },
    {
        name: 'التسويق',
        template: 'قالب رواد الإفتراضي'
    },
    {
        name: 'العملاء',
        template: 'قالب رواد الإفتراضي'
    },
    {
        name: 'الإعدادات',
        template: 'قالب رواد الإفتراضي'
    },
]

const templates = [

]
</script>