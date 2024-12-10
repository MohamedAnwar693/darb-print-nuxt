<template>
    <LayoutAdminPageHeader title="اعدادات الحساب"></LayoutAdminPageHeader>
    <div class="card-style-color p-4 text-agray-300  mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
        <div class="bg-white p-8 text-agray-300  mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 ">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            الاسم
                        </span>
                        <span class="required_style px-4">*</span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="اسم التاجر"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 mb-4">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            البريد الإلكتروني
                        </span>
                        <span class="required_style px-4">*</span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="example@test.com"></UiAdminInput>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            تاريخ الميلاد
                        </span>
                    </div>
                    <div class="flex text-sm lg:text-base">
                        <FormInputDate inputClass="bg-white" type="date"/>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            الجنس
                        </span>
                    </div>
                    <div class="flex flex-wrap gap-4">
                        <div class="flex flex-wrap gap-4">
                            <gender/>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            هل تعمل في نفس المؤسسة التابعة للمتجر؟
                        </span>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-wrap gap-4">
                            <input type="radio" id="radio_button" name="fav_radio" v-model="response" value="نعم">
                            <label class="mt-3">
                                نعم
                            </label>
                        </div>
                        <div class="flex flex-wrap gap-4">
                            <input type="radio" id="radio_color"  name="fav_radio" v-model="response" value="لا">
                            <label>
                                لا
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-5">
                <span class="font-bold lg:text-xl">
                    العنوان
                </span>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 mb-4">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            الدولة
                        </span>
                        <span class="required_style px-4">*</span>
                    </div>
                    <UiAdminSelect>
                        <template v-slot:selected-option>
                            <span>السعودية</span>
                        </template>
                        <template v-slot:options>
                            <div class="p-4 flex gap-4 hover:bg-asmooky-100" v-for="country in countries">
                                <span>{{ country.label }}</span>
                            </div>
                        </template>
                    </UiAdminSelect>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            المدينة
                        </span>
                        <span class="required_style px-4">*</span>
                    </div>
                    <UiAdminSelect>
                        <template v-slot:selected-option>
                            <span>الرياض</span>
                        </template>
                        <template v-slot:options>
                            <div class="p-4 flex gap-4 hover:bg-asmooky-100" v-for="city in Cities">
                                <span>{{ city.label }}</span>
                            </div>
                        </template>
                    </UiAdminSelect>
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
    </div>
    <!-- <button @click="editProfile"Get Data to test api</button> -->
</template>

<script setup>
import FormInputDate from '../../../components/Ui/FormInputDate.vue';
import gender from '../../../components/Ui/admin/gender.vue';
import {EditProfile} from '../../../server/account';
import { ref } from 'vue';
// Define state using `ref` Used Coupon
const response = ref(null);
const error = ref(null);

const editProfile = async () => {
  const requestData = {
    "user_id": 1,
    "email": "test@gmail.com",
    "name": "user",
  };
  try {
    const result = await EditProfile(requestData);
    response.value = result;
  } catch (err) {
    error.value = err.message || 'Error Deleting Order';
  }
};

definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الإعدادات',})

const countries = [
    {
        label: 'السعودية',
    },
    {
        label: 'الامارات',
    },
    {
        label: 'مصر',
    }
]

const Cities = [
    {
        label: 'الرياض',
    },
    {
        label: 'جدة',
    },
    {
        label: 'مكة',
    },
    {
        label: 'بريدة',
    }
]

</script>

<style scoped>
.card-style-color{
    background: #DFE5EF;
}
.required_style{
    color: red;
}
#radio_button{
    height: 20px;
    width: 20px;
    accent-color: #5D87FF;
    margin-top: 12px;
}
#radio_color{
    height: 20px;
    width: 20px;
    accent-color: #5D87FF;
    ;
}
input[type="radio"]:checked + label {
    font-weight: bold;
    color: #0056b3;
}

</style>
