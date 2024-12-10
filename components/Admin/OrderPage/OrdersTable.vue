<template>
    <UiAdminTable :tableHeadColumns="tableHeadColumns" :empty="orders.length == 0">
        <template #rows>
            <template v-for="order in orders">
                <tr>
                    <td> <input type="checkbox" name="" id="" /> </td>
                    <td @click="showDetailsForOrder = (showDetailsForOrder == order.id ? '' : order.id)" class="text-aprimary-600"> {{ order.id }} </td>
                    <td> {{ order.client }} </td>
                    <td> {{ order.order_date }} </td>
                    <td> {{ order.payment_manner }} </td>
                    <td> {{ order.shipping_manner }} </td>
                    <td> {{ order.notes }} </td>
                    <td> {{ order.status }} </td>
                    <td class="text-aprimary-600"> {{ order.total }} </td>
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
                <tr v-if="showDetailsForOrder == order.id">
                    <td colspan="10">
                        <AdminOrderPageOrderDetails />
                    </td>
                </tr>
            </template>
        </template>
        <template #empty>
            <span>لا توجد طلبات</span>
        </template>
    </UiAdminTable>
</template>

<script setup>
import {
    DeleteOrder,
    orderList,
    OrderDetail,
    OrderCancel
} from '../../../server/orderList';
import {product} from '../../../server/products';
import { ref } from 'vue';
const ProductList = await product();
const OrderList = await orderList();

// Define state using `ref` DeleteOrder
const response = ref(null);
const error = ref(null);

const deleteOrder = async () => {
  const requestData = {
    "order_id": 1,
  };
  try {
    const result = await DeleteOrder(requestData);
    response.value = result;
  } catch (err) {
    error.value = err.message || 'Error Deleting Order';
  }
};

// Define state using `ref` OrderDetails
const getOrders = ref(null);
const Error = ref(null);

const orderDetail = async () => {
  const requestData = {
    "order_id": 1,
  };
  try {
    const result = await OrderDetail(requestData);
    getOrders.value = result;
  } catch (err) {
    Error.value = err.message || 'Error get Order details';
  }
};


// Define state using `ref` DeleteOrder
const cancelOrder = ref(null);
const ERROR = ref(null);

const orderCancel = async () => {
  const requestData = {
    "order_id": 1,
  };
  try {
    const result = await OrderCancel(requestData);
    cancelOrder.value = result;
  } catch (err) {
    ERROR.value = err.message || 'Error Cancel Order';
  }
};

const showDetailsForOrder = ref()
const tableHeadColumns = [
    {
        label: 'رقم الطلب',
        key: 'id',
        sortable: true,
    },
    {
        label: 'العميل',
        key: 'client',
        sortable: true,
    },
    {
        label: 'تاريخ الطلب',
        key: 'order_date',
        sortable: true,
    },
    {
        label: 'طريقة الدفع',
        key: 'payment_manner',
        sortable: false,
    },
    {
        label: 'طريقة الشحن',
        key: 'shipping_manner',
        sortable: false,
    },
    {
        label: 'الملاحظات',
        key: 'notes',
        sortable: false,
    },
    {
        label: 'حالة الطلب',
        key: 'status',
        sortable: false,
    },
    {
        label: 'المجموع',
        key: 'total',
        sortable: true,
    },
    {
        label: 'إجراءات',
        key: 'actions',
        sortable: false,
    }
]
const orders = [
    {
        id:766816, 
        client: 'Sabah',
        order_date: '21/11/2020',
        payment_manner: 'تحويل بنكي',
        shipping_manner: 'ارامكس',
        notes: '.....',
        status: 'جاري التجهيز',
        total: 'SAR 1402.74'
    },
    {
        id:766811, 
        client: 'Sabah 2',
        order_date: '21/11/2020',
        payment_manner: 'تحويل بنكي',
        shipping_manner: 'ارامكس',
        notes: '.....',
        status: 'جاري التجهيز',
        total: 'SAR 150.74'
    }
]
</script>