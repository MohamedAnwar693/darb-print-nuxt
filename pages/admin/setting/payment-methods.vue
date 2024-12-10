<template>
    <LayoutAdminPageHeader title="طرق الدفع"></LayoutAdminPageHeader>
    <div class="card-style-color p-4 text-agray-300  mt-8 flex flex-col gap-8 animate__animated animate__slideInDown">
        <div class="bg-white p-8 text-agray-300 mb-2 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="bg-white p-2" v-for="(section, index) in sections">
                <div :class="[index == 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-3', 'grid gap-4 my-2']">
                    <NuxtLink :to="link.link" :class="index == 0 ? 'border' : 'border-transparent'" class="hover:bg-agray-200 border p-4 lg:p-8 flex items-center gap-4" v-for="link in section.links">
                        <span class="text-aprimary-600">
                            <img :src="link.icon" size="2.2rem" alt=""/>
                        </span>
                        <div class="flex flex-col gap-2">
                            <span class="font-bold">
                                {{ link.label }}
                            </span>
                            <span>
                                {{ link.description }}
                            </span>
                        </div>
                        <div class="text-aprimary-600 mr-auto">
                            <img :src="section.img" size="2.2rem" alt=""/>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
    <div class="card-style-color p-4 text-agray-300  mt-12 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">المحافظ الرقمية</span> 
        <div class="bg-white p-8  text-agray-300 mb-2  flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 mb-4 mt-2">
                <div class="flex flex-col gap-4 ">
                    <div v-for="stc in stc_pay" class="flex gap-4 items-center px-5">
                        <img :src="stc.icon" size="2.2rem" alt=""/>
                        <p class="flex flex-col">
                            <span class="text-lg">{{ stc.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="stc.active" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4 ">
                    <div v-for="paypal in paypal_pay" class="flex gap-4 items-center px-5">
                        <img :src="paypal.icon" size="2.2rem" alt=""/>
                        <p class="flex flex-col">
                            <span class="text-lg">{{ paypal.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="paypal.active" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-style-color p-4 text-agray-300  mt-12 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">اشتري الآن وادفع لاحقاً</span> 
        <div class="bg-white p-8  text-agray-300 mb-2  flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 mb-4 mt-2">
                <div class="flex flex-col gap-4 ">
                    <div v-for="tamara in tamara_pay" class="flex gap-4 items-center px-5">
                        <img :src="tamara.icon" size="2.2rem" alt=""/>
                        <p class="flex flex-col">
                            <span class="text-lg">{{ tamara.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="tamara.active" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4 ">
                    <div v-for="tabby in tabby_pay" class="flex gap-4 items-center px-5">
                        <img :src="tabby.icon" size="2.2rem" alt=""/>
                        <p class="flex flex-col">
                            <span class="text-lg">{{ tabby.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="tabby.active" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-style-color p-4 text-agray-300  mt-12 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">الحسابات البنكية</span> 
        <div class="bg-white p-8  text-agray-300 mb-2  flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="mt-4 px-2">
                <button class="px-4">
                    <span class="new-account">+  حساب جديد</span>
                </button>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 mb-4">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            اسم البنك
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="اسم البنك"></UiAdminInput>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            اسم صاحب البنك
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="اسم صاحب البنك"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 mb-4">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            رقم الحساب
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="رقم الحساب"></UiAdminInput>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            رقم الايبان
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="رقم الايبان"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-4 ">
                <div v-for="bank in bank_account" class="flex gap-4 items-center px-5">
                    <img :src="bank.icon" size="2.2rem" alt=""/>
                    <p class="flex flex-col">
                        <span class="text-lg">{{ bank.name }}</span>
                    </p>
                    <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                        <UiAdminToggler :active="bank.active" />
                    </div>
                </div>
            </div>
            <div class="px-5">
                <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 border-b border-gray-400"></div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 mb-4">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            اسم البنك
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="اسم البنك"></UiAdminInput>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            اسم صاحب البنك
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="اسم صاحب البنك"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 mb-4">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            رقم الحساب
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="رقم الحساب"></UiAdminInput>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            رقم الايبان
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="رقم الايبان"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-4 ">
                <div v-for="bank in bank_account" class="flex gap-4 items-center px-5">
                    <img :src="bank.icon" size="2.2rem" alt=""/>
                    <p class="flex flex-col">
                        <span class="text-lg">{{ bank.name }}</span>
                    </p>
                    <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                        <UiAdminToggler :active="bank.active" />
                    </div>
                </div>
            </div>
            <div class="px-5">
                <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 border-b border-gray-400"></div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 mb-4">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            اسم البنك
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="اسم البنك"></UiAdminInput>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            اسم صاحب البنك
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="اسم صاحب البنك"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 mb-4">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            رقم الحساب
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="رقم الحساب"></UiAdminInput>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            رقم الايبان
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="رقم الايبان"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-4 ">
                <div v-for="bank in bank_account" class="flex gap-4 items-center px-5">
                    <img :src="bank.icon" size="2.2rem" alt=""/>
                    <p class="flex flex-col">
                        <span class="text-lg">{{ bank.name }}</span>
                    </p>
                    <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                        <UiAdminToggler :active="bank.active" />
                    </div>
                </div>
            </div>
            <!-- <button @click="getBankPayment">Get Order Details</button> -->
        </div>
    </div>
</template>

<script setup>
import {BankPayment, GetBankPayment} from '../../../server/bank-payment';
import { ref } from 'vue';
// Define state using `ref` Used Coupon
const response = ref(null);
const error = ref(null);

const bankPayment = async () => {
  const requestData = {
    "CURRENCY_NAME": "USD",
    "CURRENCY": "2000",
  };
  try {
    const result = await BankPayment(requestData);
    response.value = result;
  } catch (err) {
    error.value = err.message || 'Error payment';
  }
};

const bankError = ref(null);

const getBankPayment = async () => {
  try {
    const result = await GetBankPayment();
    response.value = result;
  } catch (err) {
    bankError.value = err.message || 'Error payment';
  }
};

definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الإعدادات',})


const sections = [
    {
        img: '../../../public/images/vector-arrow.png',
        links: [
            {
                label: 'دورة التحويل',
                description: 'تحويل المدفوعات الالكترونية اسبوعيا',
                icon: '../../../public/images/payment-methods/arrow-payment.png',
                link: '/admin/settings',
            },
            {
                label: 'وسائل الدفع المفعلة',
                description: 'مدى , البطاقة الائتمانية',
                icon: '../../../public/images/payment-methods/purch-payment.png',
                link: '/admin/settings',
            },
            {
                label: 'الحماية من الاحتيال',
                description: 'خصص عمليات الدفع المتاحة وفق شروط محددة',
                icon: '../../../public/images/payment-methods/safe-payment.png',
                link: '/admin/settings',
            },
            {
                label: 'الشراء السريع',
                description: 'فعل شراء المنتجات بضغطة زر',
                icon: '../../../public/images/payment-methods/currency-payment.png',
                link: '/admin/settings',
            },
            {
                label: 'ابل باي',
                description: 'انقر هنا لتفعيل خدمة ابل باس',
                icon: '../../../public/images/payment-methods/apple-pay.png',
                link: '/admin/settings',
            },
            {
                label: 'حاسبة الرسوم',
                description: 'احسب رسوم العمليات المالية ',
                icon: '../../../public/images/payment-methods/cart-payment.png',
                link: '/admin/settings',
            }
        ]
    },
]

const stc_pay = [
    {
        name: null,
        icon: '../../../public/images/payment-methods/stc-pay.png',
        active: true,
    },
]

const paypal_pay = [
    {
        name: 'PayPal',
        icon: '../../../public/images/payment-methods/paypal1-payment.png',
        active: true,
    },
]

const tamara_pay = [
    {
        name: null,
        icon: '../../../public/images/payment-methods/tamara-payment.png',
        active: false,
    },
]

const tabby_pay = [
    {
        name: null,
        icon: '../../../public/images/payment-methods/tabby-payment.png',
        active: false,
    },
]

const bank_account = [
    {
        name: null,
        icon: null,
        active: true,
    },
]

</script>

<style scoped>
.card-style-color{
    background: #DFE5EF;
}

.update-dns{
    border-radius: 38px 38px 38px 38px;
    opacity: 0px;
    background: #5D87FF;
}

.new-account{
    width: 100px;
    height: 96px;
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 38px 38px 38px 38px;
    opacity: 0px;
    color: white;
    font-size: large;
    background: #5D87FF;
}
</style>
