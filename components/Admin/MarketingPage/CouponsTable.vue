<template>
    <UiAdminTable :tableHeadColumns="tableHeadColumns" :empty="coupons.length == 0">
        <template #rows>
            <tr v-for="coupon in coupons">
            </tr>
        </template>
        <template #empty>
            <span>لا توجد قسائم تخفيض</span>
        </template>
    </UiAdminTable>
    <!-- <button @click="getUsedCoupon">Get Order Details</button> -->
</template>

<script setup>
import {ViewUsedCoupon} from '../../../server/discount-coupons';
import { ref } from 'vue';
// Define state using `ref` Used Coupon
const response = ref(null);
const error = ref(null);

const getUsedCoupon = async () => {
  const requestData = {
    "coupon_id": 1,
  };
  try {
    const result = await ViewUsedCoupon(requestData);
    response.value = result;
  } catch (err) {
    error.value = err.message || 'Error Deleting Order';
  }
};


const tableHeadColumns = [
    {
        label: 'الرمز',
        key: 'code',
        sortable: true,
    },
    {
        label: 'قيمة الخصم',
        key: 'amount',
        sortable: true,
    },
    {
        label: 'عدد مرات الاستخدام',
        key: 'use_count',
        sortable: true,
    },
    {
        label: 'تاريخ البداية',
        key: 'starts_at',
        sortable: true,
    },
    {
        label: 'تاريخ النهاية',
        key: 'ends_at',
        sortable: true,
    },
    {
        label: 'حالة التفعيل',
        key: 'status',
        sortable: true,
    },
    {
        label: 'إجراءات',
        key: 'actions',
        sortable: false,
    }
]
const coupons = [
    //
]
</script>