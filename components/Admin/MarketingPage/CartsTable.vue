<template>
    <UiAdminTable :tableHeadColumns="tableHeadColumns" :empty="carts.length == 0">
        <template #rows>
            <tr v-for="cart in carts">
                <td><input type="checkbox" name="" /></td>
                <td class="flex items-center gap-4">
                    <span>{{ cart.client.name }}</span>
                    <img class="w-10" :src="cart.client.image" alt="" />
                </td>
                <td>{{ cart.created_at }}</td>
                <td>{{ cart.updated_at }}</td>
                <td>{{ cart.products_count }}</td>
                <td>{{ cart.value }}</td>
                <td>{{ cart.status }}</td>
                <td>{{ cart.step }}</td>
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
        <template #empty>
            <span>لا يوجد عملاء</span>
        </template>
    </UiAdminTable>
</template>

<script setup>
import user from '~/assets/images/user-5.png';
const tableHeadColumns = [
    {
        label: 'اسم العميل',
        key: 'client_name',
        sortable: true
    },
    {
        label: 'تاريخ الإنشاء',
        key: 'created_at',
        sortable: true
    },
    {
        label: 'تاريخ التعديل',
        key: 'updated_at',
        sortable: true
    },
    {
        label: 'عدد المنتجات',
        key: 'products_count',
        sortable: true
    },
    {
        label: 'قيمة السلة',
        key: 'value',
        sortable: true
    },
    {
        label: 'حالة الشراء',
        key: 'status',
        sortable: true
    },
    {
        label: 'خطوة ترك السلة',
        key: 'step',
        sortable: false
    },
    {
        label: '',
        key: 'actions',
        sortable: false
    },
]
const carts = [
    {
        client:{
            image: user,
            name: 'محمود احمد محمد',
        },
        created_at: '25-06-2023',
        updated_at: '01-07-2023',
        products_count: '06',
        value: 'SAR 100.00',
        status: 'لم يتم الشراء',
        step: 'تسجيل الدخول', 
    },
    {
        client:{
            image: user,
            name: 'محمود احمد محمد',
        },
        created_at: '25-06-2023',
        updated_at: '01-07-2023',
        products_count: '06',
        value: 'SAR 100.00',
        status: 'لم يتم الشراء',
        step: 'تسجيل الدخول', 
    },
    {
        client:{
            image: user,
            name: 'محمود احمد محمد',
        },
        created_at: '25-06-2023',
        updated_at: '01-07-2023',
        products_count: '06',
        value: 'SAR 100.00',
        status: 'لم يتم الشراء',
        step: 'تسجيل الدخول', 
    },
    {
        client:{
            image: user,
            name: 'محمود احمد محمد',
        },
        created_at: '25-06-2023',
        updated_at: '01-07-2023',
        products_count: '06',
        value: 'SAR 100.00',
        status: 'لم يتم الشراء',
        step: 'تسجيل الدخول', 
    },
    {
        client:{
            image: user,
            name: 'محمود احمد محمد',
        },
        created_at: '25-06-2023',
        updated_at: '01-07-2023',
        products_count: '06',
        value: 'SAR 100.00',
        status: 'لم يتم الشراء',
        step: 'تسجيل الدخول', 
    }
]
</script>