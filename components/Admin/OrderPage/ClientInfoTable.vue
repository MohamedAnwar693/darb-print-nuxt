<template>
    <UiAdminTable :tableHeadColumns="tableHeadColumns" :empty="info.length == 0">
        <template #rows>
            <template v-for="clientInfo in info">
                <tr>
                    <td><input type="checkbox" name="" hidden/></td>
                    <td> {{ clientInfo.name }} </td>
                    <td> {{ clientInfo.address }} </td>
                    <td> {{ clientInfo.charging_status }} </td>
                </tr>
            </template>
        </template>
        <template #empty>
            <span>لا توجد تفاصيل</span>
        </template>
    </UiAdminTable>
</template>

<script setup>
const showDetailsForInfo = ref()
const tableHeadColumns = [
    {
        label: 'الاسم',
        key: 'name',
        sortable: true,
    },
    {
        label: 'العنوان',
        key: 'address',
        sortable: true,
    },
    {
        label: 'حالة الشحنة',
        key: 'charging_status',
        sortable: true,
    }
]
const info = [
    {
        // id:1,
        name: 'Sabah',
        address: 'الرياض ، اليرموك ، شارع الخندق',
        charging_status: 'N/A'
    }
]
</script>
