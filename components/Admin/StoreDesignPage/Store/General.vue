<template>
    <div class="grid lg:grid-cols-2 gap-10">

        <!-- colors ///////////// -->
        <div class="flex flex-col gap-8">
            <label class="flex flex-col gap-4">
                <span class="font-bold text-lg text-aprimary-600">
                    اللون الأساسي
                </span>
                <UiAdminColorInput :color="colors.primary" @update:color="handlePrimaryColorChange"/>
            </label>
    
            <label class="flex flex-col gap-4">
                <span class="font-bold text-lg text-aprimary-600">
                    اللون الفرعي
                </span>
                <UiAdminColorInput :color="colors.secondary" @update:color="handleSecondaryColorChange"/>
            </label>

            <div class="mr-auto">
                <UiAdminActionButton>
                    <template #content>
                        حفظ
                    </template>
                </UiAdminActionButton>
            </div>
        </div>

        <!-- logos /////////////// -->
        <div class="flex flex-col gap-8">
            <div class="flex items-center gap-4">
                <div>
                    <span class="font-bold text-lg text-aprimary-600">
                        شعار المتجر
                    </span>
                    <ul class="my-3">
                        <li class="text-aprimary-600">الخصائص المثالية للشعار</li>
                        <li>العرض: 1024px</li>
                        <li>الطول: 256px</li>
                        <li>الحجم: 2MB</li>
                        <li>jpeg, jpg, pngالصيغ المدعومة:</li>
                    </ul>
                </div>
                <label class="mr-auto cursor-pointer border border-aprimary-600 flex w-32 h-32 text-aprimary-600 rounded-lg">
                    <span class="m-auto border-2 border-aprimary-600 rounded-lg border-dashed p-2">
                        <Icon name="ph:arrow-up-thin" size="2rem" />
                    </span>
                    <input type="file" class="hidden" />
                </label>
            </div>

            <div class="flex items-center gap-4">
                <div>
                    <span class="font-bold text-lg text-aprimary-600">
                        أيقونة المتجر
                    </span>
                    <ul class="my-3">
                        <li class="text-aprimary-600">الخصائص المثالية للأيقونة</li>
                        <li> الطول :px 32</li>
                        <li>العرض :px 32</li>
                        <li>الحجم : 2MB</li>
                        <li>jpeg, jpg, pngالصيغ المدعومة:</li>
                    </ul>
                </div>
                <label class="mr-auto cursor-pointer border border-aprimary-600 flex w-32 h-32 text-aprimary-600 rounded-lg">
                    <span class="m-auto border-2 border-aprimary-600 rounded-lg border-dashed p-2">
                        <Icon name="ph:arrow-up-thin" size="2rem" />
                    </span>
                    <input type="file" class="hidden" />
                </label>
            </div>
        </div>

        <!--  Copyright statement  ////-->
        <div class="flex flex-col gap-4">
            <label class="flex flex-col gap-4">
                <span class="font-bold text-lg text-aprimary-600">
                    عبارة حقوق الحفظ
                </span>
                <div class="flex flex-col gap-4">
                    <label class="flex flex-col gap-4">
                        <UiAdminInput />
                    </label>
                </div>
            </label>
            <div class="mr-auto">
                <UiAdminActionButton>
                    <template #content>
                        حفظ
                    </template>
                </UiAdminActionButton>
            </div>
        </div>

        <!-- font //////////// -->
        <div class="flex flex-col gap-4">
            <label class="flex flex-col gap-4">
                <span class="font-bold text-lg text-aprimary-600">
                    الخط
                </span>
                <UiAdminSelect>
                    <template v-slot:selected-option>
                        <span>خط رواد الإفتراضي</span>
                    </template>
                    <template v-slot:options>
                        <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                            <span>الخط الأول</span>
                        </div>
                        <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                            <span>الخط الثاني</span>
                        </div>
                        <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                            <span>الخط الثالث</span>
                        </div>
                    </template>
                </UiAdminSelect>
            </label>
            <div class="mr-auto">
                <UiAdminActionButton>
                    <template #content>
                        حفظ
                    </template>
                </UiAdminActionButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import {AddCategory} from '../../../../server/store-design';
import { ref } from 'vue';
// Define state using `ref` Used Coupon
const response = ref(null);
const error = ref(null);

const addCategory = async () => {
  const requestData = {
    "name": "newCat",
    "image": "newImg.png",
    "icon_image": "newImg.png",
    "trending": "New",
    "status": "success",
  };
  try {
    const result = await AddCategory(requestData);
    response.value = result;
  } catch (err) {
    error.value = err.message || 'Error Deleting Order';
  }
};


const colors = ref({
    primary: '#5d87ff',
    secondary: '#49beff'
})

const handlePrimaryColorChange = (v) => colors.value.primary = v
const handleSecondaryColorChange = (v) => colors.value.secondary = v
</script>