<template>
    <UiAdminTable :tableHeadColumns="tableHeadColumns">
        <template #rows>
            <tr v-for="client in clients">
                <td>
                    <input type="checkbox" />
                </td>
                <td class="text-aprimary-600">
                    {{ client.name }}
                </td>
                <td class="text-aprimary-600">
                    {{ client.id }}
                </td>
                <td>
                    {{ client.type }}
                </td>
                <td>
                    {{ client.email }}
                </td>
                <td>
                    {{ client.country }}
                </td>
                <td>
                    {{ client.source }}
                </td>
                <td class="text-aprimary-600">
                    {{ client.orders_count }}
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
const tableHeadColumns = [
    {
        label: 'اسم العميل',
        key: 'name',
        sortable: true
    },
    {
        label: 'المعرف',
        key: 'id',
        sortable: true
    },
    {
        label: 'نوع العميل',
        key: 'type',
        sortable: true
    },
    {
        label: 'البريد الإلكتروني',
        key: 'email',
        sortable: true
    },
    {
        label: 'المدينة/الدولة',
        key: 'country',
        sortable: true
    },
    {
        label: 'مصدر العميل',
        key: 'source',
        sortable: true
    },
    {
        label: 'عدد الطلبات',
        key: 'orders_count',
        sortable: true
    },
    {
        label: 'إجراءات',
        key: 'actions',
        sortable: false
    },
]
const clients = [
    {
        name: 'Mazeed',
        id: '9665',
        type: 'شركة',
        email: 'Mazeed@zid.sa',
        country: 'الرياض/بالسعودية',
        source: 'المتجر الإلكتروني',
        orders_count: 0
    },
    {
        name: 'Mazeed',
        id: '9665',
        type: 'شركة',
        email: 'Mazeed@zid.sa',
        country: 'الرياض/بالسعودية',
        source: 'المتجر الإلكتروني',
        orders_count: 0
    },
    {
        name: 'Mazeed',
        id: '9665',
        type: 'شركة',
        email: 'Mazeed@zid.sa',
        country: 'الرياض/بالسعودية',
        source: 'المتجر الإلكتروني',
        orders_count: 0
    },
    {
        name: 'Mazeed',
        id: '9665',
        type: 'شركة',
        email: 'Mazeed@zid.sa',
        country: 'الرياض/بالسعودية',
        source: 'المتجر الإلكتروني',
        orders_count: 0
    }
]
</script>