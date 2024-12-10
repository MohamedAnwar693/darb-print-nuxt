<template>
    <UiAdminTable :tableHeadColumns="tableHeadColumns" :empty="invoices.length == 0">
        <template #rows>
            <template v-for="invoice in invoices">
                <tr>
                    <td><input type="checkbox" name="" hidden/></td>
                    <td> {{ invoice.product_value }} </td>
                    <td> {{ invoice.delivery }} </td>
                    <td> {{ invoice.cash_on_delivery }} </td>
                    <td> {{ invoice.value_added_tax }} </td>
                    <td> {{ invoice.total_value_including_vat }} </td>
                    <td> {{ invoice.total }} </td>
                </tr>
            </template>
        </template>
        <template #empty>
            <span>لا توجد منتجات</span>
        </template>
    </UiAdminTable>
</template>

<script setup>
const showDetailsForProduct = ref()
const tableHeadColumns = [
    {
        label: 'قيمة المنتجات بدون  الضريبة المضافة',
        key: 'product_value',
        sortable: true,
    },
    {
        label: 'التوصيل',
        key: 'delivery',
        sortable: true,
    },
    {
        label: 'دفع عند التوصيل',
        key: 'cash_on_delivery',
        sortable: true,
    },
    {
        label: 'ضريبة القيمة المضاف (15%)',
        key: 'value_added_tax',
        sortable: true,
    },
    {
        label: 'القيمة الإجمالية شاملة ض.ق.م',
        key: 'total_value_including_vat',
        sortable: true,
    },
    {
        label: 'المجموع الكلي',
        key: 'total',
        sortable: true,
    }
]
const invoices = [
    {
        product_value: 'SAR 1187.77',
        delivery: 'SAR 25.00',
        cash_on_delivery: 'SAR 10.00',
        value_added_tax: 'SAR 182.97',
        total_value_including_vat: 'SAR 1367.74',
        total: 'SAR  1402.74',
    }
]
</script>
