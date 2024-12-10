<template>
    <div class="flex flex-col gap-8 text-agray-300 bg-asmooky-200 px-4 py-8 ">
        <LayoutAdminPageHeader title="المنتجات">
            <template #action-buttons>
                <button class="bg-agray-200 p-1 hover:bg-aprimary-600 hover:text-white">
                    <span class="hidden lg:block">
                        استيراد المنتجات
                    </span>
                    <span class="block lg:hidden">
                        <Icon name="material-symbols:upload-rounded" size="1.1rem" />
                    </span>
                </button>
                <NuxtLink to="/admin/products/create">
                    <UiAdminActionButton>
                        <template #content>
                            <span class="hidden lg:inline">
                                إضافة منتج جديد
                            </span>
                            <span>
                                <Icon name="ic:baseline-add" size="1.1rem" />
                            </span>
                        </template>
                    </UiAdminActionButton>
                </NuxtLink>
            </template>
        </LayoutAdminPageHeader>
        
        <div class="flex flex-col gap-8">
            <!-- filter //////// -->
            <AdminProductPageFilter />

            <!-- actions /////////// -->
            <AdminProductPageActions />

            <!-- table ////////////////// -->
            <AdminProductPageProductsTable />
        </div>

    </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - المنتجات',})
</script>