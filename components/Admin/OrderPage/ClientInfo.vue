<template>
    <div class="bg-white lg:p-2 xl:p-8 flex flex-col gap-6">
        <label class="flex flex-col gap-2">
            <span class="font-bold text-lg">ملاحاظات العميل</span>
            <UiAdminTextarea placeholder="يتم تعديل حجم هذا المستطيل بحسب النص ويظهر عباره لايوجد ملاحظات في حال لم يكتب العميل اي ملاحظه" class="border-2 border-asmooky-200"/>
        </label>
        <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 border-b border-agray-400"></div>

        <!--Client info Table /////////// -->
        <label class="flex flex-col gap-2">
            <span class="font-bold text-lg">تفاصيل العميل</span>
            <AdminOrderPageClintInfoTable />
        </label>
        <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 border-b border-agray-400"></div>

        <!--Client Products Table /////////// -->
        <label class="flex flex-col gap-2">
            <span class="font-bold text-lg">المنتجات</span>
            <AdminOrderPageClientProduct/>
        </label>
        <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 border-b border-agray-400"></div>

        <!--Client Invoices Table /////////// -->
        <label class="flex flex-col gap-2">
            <span class="font-bold text-lg">مبلغ الفاتورة</span>
            <AdminOrderPageClientInvoice/>
        </label>

    </div>
</template>

<script setup>
import AdminOrderPageClintInfoTable from './ClientInfoTable.vue';
import AdminOrderPageClientProduct from './ClientProduct.vue';
import AdminOrderPageClientInvoice from './InvoiceAmount.vue';
</script>