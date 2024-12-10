<template>
    <div class="flex flex-col gap-10">
        <!-- carts ///////////// -->
        <div class="flex flex-col gap-8 text-agray-300 bg-asmooky-200 p-2 xl:p-4">
            <LayoutAdminPageHeader title="السلات المتروكة"></LayoutAdminPageHeader>
            <div class="flex flex-col gap-8">
                <!-- filter //////// -->
                <AdminMarketingPageCartFilter />
    
                <!-- actions /////////// -->
                <AdminMarketingPageCartActions />
    
                <!-- table ////////////////// -->
                <AdminMarketingPageCartsTable />
            </div>
        </div>

        <!-- pagination ///// -->
        <div class="my-8 mx-auto">
            <UiAdminPagination :links="paginationLinks" />
        </div>
    </div>
</template>
<script setup>
definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - السلات المتروكة',})
const paginationLinks = {
    previous: 'admin/marketing',
    next: '/admin/marketing',
    last: '/admin/marketing',
    first: '/admin/marketing',
    links: [
        {
            label: 1,
            link: '/admin/marketing',
            active: true,
        },
        {
            label: 2,
            link: '/admin/marketing',
            active: false,
        }
    ]
}
</script>