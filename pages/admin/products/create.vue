<template>
    <div class="flex flex-col gap-8 text-agray-300 bg-white px-6 py-12">
        <LayoutAdminPageHeader title="اضافة منتج جديد"></LayoutAdminPageHeader>
        
        <div class="grid lg:grid-cols-6 gap-8">

            <!-- first column /////////// -->
            <div class="flex flex-col lg:col-span-4 gap-8">
                <div class="flex flex-col gap-2">
                    <span class="font-bold text-black">
                        اسم المنتج
                    </span>
                    <UiAdminInput placeholder="اسم المنتج باللغه العربية" />
                    <UiAdminInput placeholder="اسم المنتج باللغه الانجليزية" />
                </div>
    
                <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    <!-- sku ////// -->
                    <div class="flex flex-col gap-4">
                        <span class="font-bold text-black">
                            رمز  المنتج   SKU
                        </span>
                        <UiAdminInput />
                    </div>

                    <!-- weight ///////// -->
                    <div class="flex flex-col gap-4">
                        <span class="font-bold text-black">
                            الوزن
                        </span>
                        <div class="flex text-sm">
                            <UiAdminInput class="flex-1"/>
                            <UiAdminSelect>
                                <template v-slot:selected-option>
                                    <span>KG</span>
                                </template>
                                <template v-slot:options>
                                    <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                                        <span>KG</span>
                                    </div>
                                    <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                                        <span>OZ</span>
                                    </div>
                                </template>
                            </UiAdminSelect>
                        </div>
                    </div>

                    <!-- price /////////// -->
                    <div class="flex flex-col gap-4">
                        <span class="font-bold text-black">
                            تكلفة المنتج
                        </span>
                        <div class="flex items-center border-2 border-asmooky-200">
                            <UiAdminInput class="border-transparent flex-1" />
                            <span class="text-sm px-2">SAR</span>
                        </div>
                    </div>

                    <!-- quantity /////////// -->
                    <div class="flex flex-col gap-4">
                        <span class="font-bold text-black">
                            الكمية
                        </span>
                        <div class="flex flex-col gap-2">
                            <UiAdminInput class="flex-1" />
                            <div class="flex items-center gap-2">
                                <input type="checkbox" />
                                <span>غير محدودة</span>
                            </div>
                        </div>
                    </div>

                    <!-- minimum quantity /////////// -->
                    <div class="flex flex-col gap-4">
                        <span class="font-bold text-black">
                            أقل كمية للطلب
                        </span>
                        <UiAdminInput  />
                    </div>

                    <!-- minimum quantity /////////// -->
                    <div class="flex flex-col gap-4">
                        <span class="font-bold text-black">
                            أقصي كمية لكل طلب
                        </span>
                        <UiAdminInput />
                    </div>

                    <!-- category /////////// -->
                    <div class="lg:col-span-2 flex flex-wrap gap-4 items-center">
                        <span class="font-bold text-black">
                            التصنيف
                        </span>
                        <UiAdminSelect class="flex-1">
                            <template v-slot:selected-option>
                                <span>اختر</span>
                            </template>
                            <template v-slot:options>
                                <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                                    <span>فئة</span>
                                </div>
                            </template>
                        </UiAdminSelect>
                        <button class="text-aprimary-600 font-bold underline">
                            + اضف تصنيف جديد
                        </button>
                    </div>
                </div>
            </div>

            
            <!-- second column ///////// -->
            <div class="flex flex-col lg:col-span-2 gap-4 lg:gap-0 lg:justify-between">

                <!-- price //////// -->
                <div class="flex flex-col gap-2 text-sm">
                    <span>&nbsp;</span>
                    <div class="flex flex-col flex-wrap lg:flex-row gap-2 border-2 border-asmooky-200 p-3">
                        <div class="flex flex-col gap-2">
                            <span class="font-bold text-black">السعر</span>
                            <div class="xl:w-fit flex items-center border-2 border-asmooky-200">
                                <UiAdminInput value="0" class="text-aprimary-600 border-transparent" />
                                <span class="text-sm px-2">SAR</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 lg:mr-auto">
                            <input type="checkbox" />
                            <span>تخفيض</span>
                        </div>
                    </div>
                </div>

                <!-- toggler buttons //////// -->
                <div class="flex flex-col gap-2 text-black font-bold">
                    <!-- taxed //////// -->
                    <div class="flex items-center border-2 border-asmooky-200 p-2 lg:p-4">
                        <span class="lg:text-lg">
                            معفي من الضريبة
                        </span>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="false" />
                        </div>
                    </div>

                    <!-- published //////// -->
                    <div class="flex items-center border-2 border-asmooky-200 p-2 lg:p-4">
                        <span class="lg:text-lg">
                            النشر على المتجر
                        </span>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="false" />
                        </div>
                    </div>

                    <!-- needs shipping /////////// -->
                    <div class="flex items-center border-2 border-asmooky-200 p-2 lg:p-4">
                        <span class="lg:text-lg">
                            المنتج يتطلب شحن
                        </span>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="false" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - إنشاء منتج',})
import {AddProduct} from '../../../server/products';

import { ref } from 'vue';
// Define state using `ref`
const response = ref(null);
const error = ref(null);

const addProduct = async () => {
  const requestData = {
    "name": "test1",
    "category_id": "2",
    "description": "required req new req",
    "cover_image": "required.png",
    "product_image": "required2.png",
    "price": "1000",
    "discount_type": "20",
    "discount_amount": "20",
    "product_stock": "1",
    "trending": "1",
    "variant_product": "0"
  };
  try {
    const result = await AddProduct(requestData);
    response.value = result;
  } catch (err) {
    error.value = err.message || 'Error creating product';
  }
};

</script>