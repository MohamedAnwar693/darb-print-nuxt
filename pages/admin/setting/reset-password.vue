<template>
    <LayoutAdminPageHeader title="تغيير كلمة المرور"></LayoutAdminPageHeader>
    <div class="card-style-color p-4 text-agray-300  mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
        <div class="bg-white p-8 text-agray-300 mb-2 mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 ">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            كلمة المرور القديمة
                        </span>
                        <span class="required_style px-4">*</span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="*****************"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 mb-4">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            كلمة المرور الجديدة
                        </span>
                        <span class="required_style px-4">*</span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="*****************"></UiAdminInput>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            تأكيد كلمة المرور الجديدة
                        </span>
                        <span class="required_style px-4">*</span>
                    </div>
                    <div class="flex text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="*****************"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-2 mt-12 text-left ml-6 mr-8 mb-8">
                <UiAdminActionButton>
                    <template #content>
                        حفظ
                    </template>
                </UiAdminActionButton>
            </div>
        </div>
        <!-- <button @click="resetPasswordSave">Reset password test</button> -->
    </div>
</template>

<script setup>
import {UpdatePassword} from '../../../server/forgot-password';
import { ref } from 'vue';
// Define state using `ref` Used Coupon
const response = ref(null);
const error = ref(null);

const resetPasswordSave = async () => {
  const requestData = {
    "user_id": 1,
    "old_password": "1234",
    "password": "123password",
    "password_confirmation": "123password",
  };
  try {
    const result = await UpdatePassword(requestData);
    response.value = result;
  } catch (err) {
    error.value = err.message || 'Error payment';
  }
};


definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الإعدادات',})

</script>

<style scoped>
.card-style-color{
    background: #DFE5EF;
}
.required_style{
    color: red;
}
</style>
