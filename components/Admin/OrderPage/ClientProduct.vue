<template>
    <UiAdminTable :tableHeadColumns="tableHeadColumns" :empty="products.length == 0">
        <template #rows>
            <template v-for="product in products">
                <tr>
                    <td><input type="checkbox" name="" hidden/></td>
                    <td> {{ product.product_id }} </td>
                    <td> {{ product.name }} </td>
                    <td> {{ product.quantity }} </td>
                    <td> {{ product.price }} </td>
                    <td> {{ product.total }} </td>
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
        label: 'كود المنتج',
        key: 'product_id',
        sortable: true,
    },
    {
        label: 'الاسم',
        key: 'name',
        sortable: true,
    },
    {
        label: 'الكميه',
        key: 'quantity',
        sortable: true,
    },
    {
        label: 'السعر',
        key: 'price',
        sortable: true,
    },
    {
        label: 'المجموع',
        key: 'total',
        sortable: true,
    }
]
const products = [
    {
        product_id: 'Z.3.156607307917577749',
        name: 'هايبر اكس 12-cloud stinger- test 2.2 شهر -تست 4',
        quantity: '1',
        price: '270.25',
        total: ' 270.25 SAR',
    },
    {
        product_id: 'Z.3.15660706990946028',
        name: 'لوجيتيك جي 933',
        quantity: '1',
        price: '1092.24',
        total: '1092.24 SAR',
    }
]
</script>
