<template>
    <div class="flex flex-col gap-8 text-agray-300 bg-asmooky-200 p-2 xl:p-4">
        <LayoutAdminPageHeader title="قائمة الطلبات" sub-title="جميع الطلبات في متجرك هنا">
            <template #action-buttons>
                <NuxtLink to="/admin/orders/create">
                    <UiAdminActionButton>
                        <template #content>
                            إنشاء طلب جديد  +
                        </template>
                    </UiAdminActionButton>
                </NuxtLink>
            </template>
        </LayoutAdminPageHeader>

        <!-- page filter //////// -->
        <AdminOrderPageFilter />

        <!-- action buttons ///////// -->
        <AdminOrderPageActionButtons />

        <!-- orders table ////////////// -->
        <AdminOrderPageOrdersTable />

        <!-- Client info ////////// -->
        <AdminOrderPageClintInfo />

    </div>
</template>

<script setup>
import AdminOrderPageClintInfo from '../../../components/Admin/OrderPage/ClientInfo.vue'
definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الطلبات'})
</script>