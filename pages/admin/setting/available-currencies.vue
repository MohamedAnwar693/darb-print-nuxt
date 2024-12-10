<template>
    <LayoutAdminPageHeader title="العملات المتاحة"></LayoutAdminPageHeader>
    <div class="card-style-color p-4 text-agray-300  mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
        <div class="bg-white p-8 text-agray-300 mb-2 mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12">
                <label class="flex flex-col gap-2  px-5">
                    <span class="font-bold text-lg">عملة المتجر الحالية</span>
                    <span>لن تتمك من تغيير العملة في حال وجود طلبات شراء</span>
                    <UiAdminSelect>
                        <template v-slot:selected-option>
                            <span>ريال سعودي  (ر.س)</span>
                        </template>
                        <template v-slot:options>
                            <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                                <span></span>
                            </div>
                        </template>
                    </UiAdminSelect>
                </label>
                <div class="flex flex-col gap-4 px-5 mt-2">
                    <span class="px-4 font-bold text-lg">العملة</span>
                    <div v-for="currency in currencies" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">{{ currency.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="currency.active" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12">
                <div class="flex flex-col gap-4 px-5">
                    <span class="font-bold lg:text-xl">
                        اضافة عملة جديدة
                    </span>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="درهم اماراني (د,ا)"></UiAdminInput>
                        <UiAdminActionButton>
                            <template #content>
                                اضافة
                            </template>
                        </UiAdminActionButton>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-2 mt-4 text-left ml-5 mr-8 mb-4">
                <UiAdminActionButton>
                    <template #content>
                        حفظ
                    </template>
                </UiAdminActionButton>
            </div>
        </div>
        <!-- <button @click="currency">Get data</button> -->
    </div>
</template>

<script setup>
import {Currency} from '../../../server/currency';
import { ref } from 'vue';
// Define state using `ref` Used Coupon
const response = ref(null);
const error = ref(null);

const currency = async () => {
  const requestData = {
    "currency_name": "USD",
    "currency": "5000",
  };
  try {
    const result = await Currency(requestData);
    response.value = result;
  } catch (err) {
    error.value = err.message || 'Error payment';
  }
};


definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الإعدادات',})

const currencies = [
    {
        name: 'ريال سعودي  (ر.س)',
        active: true,
    }
]

</script>

<style scoped>
.card-style-color{
    background: #DFE5EF;
}
</style>
