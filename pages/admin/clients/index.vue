<template>
    <div class="flex flex-col gap-4">
        <!-- clients ///////////// -->
        <div class="flex flex-col gap-8 text-agray-300 bg-asmooky-200 p-2 xl:p-4">
            <LayoutAdminPageHeader title="العملاء" sub-title="جميع العملاء في متجرك هنا">
                <template #action-buttons>
                    <button class="bg-agray-200 flex gap-2 items-center px-4 py-2 hover:bg-aprimary-600 hover:text-white">
                        <span class="hidden lg:inline-flex">استيراد العملاء</span>
                        <Icon name="ic:baseline-upload-file" size="1.2rem" />
                    </button>
    
                    <UiAdminActionButton>
                        <template #content>
                            <span class="hidden lg:inline-flex">إضافة عميل جديد</span>
                            <Icon name="material-symbols:add-rounded" size="1.2rem" />
                        </template>
                    </UiAdminActionButton>
                </template>
            </LayoutAdminPageHeader>
    
            <!-- page filter //////// -->
            <AdminClientsPageFilter />
    
            <!-- actions /////////// -->
            <AdminClientsPageActions />
    
            <!-- table ////////////// -->
            <AdminClientsPageClientsTable />
        </div>
    
        <!-- pagination ///// -->
        <div class="my-8 mx-auto">
            <UiAdminPagination :links="paginationLinks" />
        </div>
    </div>
</template>
<script setup>
definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - العملاء',})
const paginationLinks = {
    previous: 'admin/clients',
    next: '/admin/clients',
    last: '/admin/clients',
    first: '/admin/clients',
    links: [
        {
            label: 1,
            link: '/admin/clients',
            active: true,
        },
        {
            label: 2,
            link: '/admin/clients',
            active: false,
        }
    ]
}
</script>