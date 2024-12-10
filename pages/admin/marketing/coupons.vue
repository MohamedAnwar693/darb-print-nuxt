<template>
    <div class="flex flex-col gap-10">
        <!-- coupons ///////////// -->
        <div class="flex flex-col gap-8 text-agray-300 bg-asmooky-200 p-2 xl:p-4">
            <LayoutAdminPageHeader title="قسائم التخفيض" sub-title="كوبونات الخصم">
                <template #action-buttons>
                    <button class="bg-agray-200 flex gap-2 items-center px-4 py-2 hover:bg-aprimary-600 hover:text-white">
                        <span class="hidden lg:inline-flex">التقارير</span>
                        <Icon name="mdi:chart-bar" size="1.2rem" />
                    </button>
    
                    <UiAdminActionButton>
                        <template #content>
                            <span class="hidden lg:inline-flex">إنشاء قسيمة</span>
                            <Icon name="material-symbols:add-rounded" size="1.2rem" />
                        </template>
                    </UiAdminActionButton>
                </template>
            </LayoutAdminPageHeader>
    
            <!-- page filter //////// -->
            <AdminMarketingPageCouponsFilter/>
    
            <!-- actions /////////// -->
            <AdminMarketingPageCouponsActions />
    
            <!-- coupons table ////////////// -->
            <AdminMarketingPageCouponsTable />
        </div>
    
        <!-- pagination ///// -->
        <div class="my-8 mx-auto">
            <UiAdminPagination :links="paginationLinks" />
        </div>
    </div>
</template>
<script setup>
definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - قسائم التخفيض',})
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