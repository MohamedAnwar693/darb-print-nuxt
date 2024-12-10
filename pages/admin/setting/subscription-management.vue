<template>
    <LayoutAdminPageHeader title="إدارة الاشتراكات"></LayoutAdminPageHeader>
    <div class="card-style-color p-4 text-agray-300  mt-8 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">بيانات اشتراكك</span>
        <div class="bg-white p-8  text-agray-300 mb-2  flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="flex gap-4 items-center px-5">
                <p class="flex flex-col">
                    <span class="text-lg font-bold">إسم الباقة الحالية </span>
                </p>
                <button class="flex gap-2 mr-auto border-2  rounded-md border-indigo-600 px-4 py-2">
                    <img  src="../../../public/images/pencil-edit.png" alt=""/>
                    <span>تغيير الباقة</span>
                </button>
            </div>
            <div>
                <span class="font-bold lg:text-lg px-5">حالة الاشتراك:</span>
                <span class="order_link">فعال</span>
            </div>
            <span class="text-style px-5 text-lg font-bold">وصف الباقة باختصار وصف الباقة باختصار وصف الباقة باختصار وصف الباقة باختصار وصف الباقة باختصار وصف الباقة باختصار</span>
            <div class="flex gap-2 px-3">
                <div>
                    <span class="font-bold lg:text-lg px-2">تاريخ بداية الاشتراك:</span>
                    <span class="font-bold lg:text-sm"> 10 يوليو, 2023</span>
                </div>
                <div class="vertical inset bg-slate-400 border-slate-400 border-2 "></div>
                <div>
                    <span class="font-bold lg:text-lg px-2">متبقي:</span>
                    <span class="font-bold lg:text-sm">11 شهر و 19 يوم</span>
                </div>
                <div class="vertical inset bg-slate-400 border-slate-400 border-2 "></div>
                <div>
                    <span class="font-bold lg:text-lg px-2">تاريخ التجديد:</span>
                    <span class="font-bold lg:text-sm">9 يوليو, 2024</span>
                </div>
            </div>
        </div>
    </div>
    <div class="card-style-color p-4 text-agray-300  mt-12 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">سجل مشترياتك</span>
        <AdminRecordPurchasesPageFilter/>
        <UiAdminTable :tableHeadColumns="tableHeadColumns">
            <template #rows>
                <tr v-for="client in clients">
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td class="text-aprimary-600">
                        {{ client.invoice_number }}
                    </td>
                    <td class="text-aprimary-600">
                        {{ client.date }}
                    </td>
                    <td>
                        {{ client.payment }}
                    </td>
                    <td>
                        {{ client.amount }}
                    </td>
                    <td>
                        {{ client.status }}
                    </td>
                    <td>
                        <button class="bg-aprimary-600 text-white p-2">
                            {{ client.invoice }}
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
        <!-- pagination ///// -->
        <div class="my-8 mx-auto">
            <UiAdminPagination :links="paginationLinks" />
        </div>
    </div>
    <div class="card-style-color p-4 text-agray-300  mt-12 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">طرق الدفع</span>
        <div class="bg-white p-8  text-agray-300 mb-2  flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 mb-4 mt-2">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            رقم البطاقة
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="****   ****   ****   4037"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 mb-4">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            تاريخ البطاقة
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="شهر (MM) / السنة (YY)"></UiAdminInput>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            كود البطاقة
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="CVV"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 mb-4">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            الاسم على البطاقة
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="الاسم"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="px-4">
                <span class="payment-style">عند حفظ البطاقة سيتم سحب مبلغ 1 SR للتاكد من صلاحيتها و اعادته القائيا</span>
            </div>
            <p class="lg:text-xl font-bold px-6">
                الاطلاع على
                <NuxtLink to="/admin/settings" class="text-aprimary-600">الشروط والاحكام</NuxtLink> 
            </p>
            <div class="lg:col-span-2 mt-12 text-left ml-6 mr-8 mb-8">
                <UiAdminActionButton>
                    <template #content>
                        حفظ
                    </template>
                </UiAdminActionButton>
            </div>
            <button @click="getStripePayment">Get Order Details</button>
        </div>
    </div>
</template>

<script setup>
import AdminRecordPurchasesPageFilter from '../../../components/Admin/RecordPurchasesPage/Filter.vue';
import {StripePayment, GetStripePayment} from '../../../server/payment';
import { ref } from 'vue';
// Define state using `ref` Used Coupon
const response = ref(null);
const error = ref(null);

const stripePayment = async () => {
  const requestData = {
    "CURRENCY_NAME": "USD",
    "CURRENCY": "2000",
  };
  try {
    const result = await StripePayment(requestData);
    response.value = result;
  } catch (err) {
    error.value = err.message || 'Error payment';
  }
};


const stripeError = ref(null);

const getStripePayment = async () => {
  try {
    const result = await GetStripePayment();
    response.value = result;
  } catch (err) {
    stripeError.value = err.message || 'Error payment';
  }
};

definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الإعدادات',})

const paginationLinks = {
    previous: '/admin/setting/subscription-management',
    next: '/admin/setting/subscription-management',
    last: '/admin/setting/subscription-management',
    first: '/admin/setting/subscription-management',
    links: [
        {
            label: 1,
            link: '/admin/setting/subscription-management',
            active: true,
        },
        {
            label: 2,
            link: '/admin/setting/subscription-management',
            active: false,
        }
    ]
}

const google_analytics = [
    {
        name: 'Google analytics ',
        active: true,
    },
]

const facebook_pixel = [
    {
        name: 'Facebook pixel',
        active: true,
    },
]


const tableHeadColumns = [
    {
        label: 'رقم الفاتورة',
        key: 'invoice_number',
        sortable: true
    },
    {
        label: 'تاريخ الشراء',
        key: 'date',
        sortable: true
    },
    {
        label: 'طريقة الدفع',
        key: 'payment',
        sortable: true
    },
    {
        label: 'المبلغ الاجمالي',
        key: 'amount',
        sortable: true
    },
    {
        label: 'حالة الدفع',
        key: 'status',
        sortable: true
    },
    {
        label: 'الفاتورة',
        key: 'invoice',
        sortable: true
    },
]
const clients = [
    {
        invoice_number: '930573',
        date: '23-07-10',
        payment: 'تحويل بنكي',
        amount: '0.00 رس',
        status: 'دفعت',
        invoice: 'حمل الفاتورة',
    },
    {
        invoice_number: '930573',
        date: '23-07-10',
        payment: 'تحويل بنكي',
        amount: '0.00 رس',
        status: 'دفعت',
        invoice: 'حمل الفاتورة',
    },
    {
        invoice_number: '930573',
        date: '23-07-10',
        payment: 'تحويل بنكي',
        amount: '0.00 رس',
        status: 'دفعت',
        invoice: 'حمل الفاتورة',
    },
    {
        invoice_number: '930573',
        date: '23-07-10',
        payment: 'تحويل بنكي',
        amount: '0.00 رس',
        status: 'دفعت',
        invoice: 'حمل الفاتورة',
    },
]

</Script>

<style scoped>
.card-style-color{
    background: #DFE5EF;
}

.order_link{
    width: 100px;
    height: 96px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 3px;
    padding-bottom: 3px;
    border-radius: 38px 38px 38px 38px;
    opacity: 0px;
    background: #3BFE1C;
    color: white;
}

.payment-style{
    width: 100px;
    height: 96px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 6px;
    padding-bottom: 5px;
    border-radius: 8px 8px 8px 8px;
    opacity: 2px;
    background: #FEF5E5;
}

.text-style{
    max-inline-size: 70%;
}
</style>