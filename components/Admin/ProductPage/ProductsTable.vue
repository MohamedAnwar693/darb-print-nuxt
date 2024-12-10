<template>
    <UiAdminTable :tableHeadColumns="tableHeadColumns" :empty="products.length == 0">
        <template #rows>
            <tr v-for="product in products">
                <td><input type="checkbox" /></td>
                <td><img class="w-20" :src="product.image" alt="" /></td>
                <td>{{ product.name }}</td>
                <td>{{ product.sku }}</td>
                <td>{{ product.quantity }}</td>
                <td>
                    <div class="flex flex-col gap-1">
                        <span class="text-aorange-500">{{ product.price.new }}</span>
                        <span class="line-through">{{ product.price.old }}</span>
                    </div>
                </td>
                <td>
                    <button class="p-2 bg-agreen-500 text-sm text-white font-bold">
                        {{ product.status }}
                    </button>
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
</template>

<script setup>
import {product, CreateProduct} from '../../../server/products';
import image from '~/assets/images/pprint-1.png';


const ProductList = await product();
const createProduct = await CreateProduct();

const tableHeadColumns = [
    {
        label: 'المنتج',
        key: 'product',
        sortable: false
    },
    {
        label: 'الإسم',
        key: 'name',
        sortable: true
    },
    {
        label: 'رمز المنتج SKU',
        key: 'sku',
        sortable: false
    },
    {
        label: 'الكمية',
        key: 'quantity',
        sortable: true
    },
    {
        label: 'السعر',
        key: 'price',
        sortable: true
    },
    {
        label: 'العرض في المتجر',
        key: 'status',
        sortable: false
    },
    {
        label: 'إجراءات',
        key: 'actions',
        sortable: false
    },
]

const products = [
    {
        image: image,
        name: 'توت باغ',
        sku: 'Z.359300.16867618066245985',
        quantity: 0,
        price: {
            old: 'SAR 10.00',
            new: 'SAR 5.00',
        },
        status: 'منشور'
    },
    {
        image: image,
        name: 'توت باغ',
        sku: 'Z.359300.16867618066245985',
        quantity: 0,
        price: {
            old: 'SAR 10.00',
            new: 'SAR 5.00',
        },
        status: 'منشور'
    },
    {
        image: image,
        name: 'توت باغ',
        sku: 'Z.359300.16867618066245985',
        quantity: 0,
        price: {
            old: 'SAR 10.00',
            new: 'SAR 5.00',
        },
        status: 'منشور'
    }
]
</script>