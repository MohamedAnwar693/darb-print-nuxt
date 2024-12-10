<template>
    <LayoutAdminPageHeader title="ضريبة القيمة المضافة"></LayoutAdminPageHeader>
    <div class="card-style-color p-4 text-agray-300  mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
        <div class="bg-white p-8 text-agray-300 mb-2 mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="mt-4 px-5">
                <span class="font-bold lg:text-xl">ضريبة القيمة المضافة VAT</span>
                <button class="px-4">
                    <span class="team-count">+  اضافة ضريبة</span>
                </button>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 mb-4 mt-2">
                <div class="flex flex-col gap-4 px-5 mt-4">
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="الرقم الضريبي للمنشأة ( )"></UiAdminInput>
                        <UiAdminActionButton>
                            <template #content>
                                تغيير الاعدادات
                            </template>
                        </UiAdminActionButton>
                    </div>
                </div>
                <div class="flex flex-col gap-4 ">
                    <div v-for="service in services" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">{{ service.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="service.active" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12">
                <div class="flex flex-col gap-4  mt-2">
                    <div v-for="product in products" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">{{ product.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="product.active" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4  mt-2">
                    <div v-for="country in countries" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">{{ country.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="country.active" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الإعدادات',})

const services = [
    {
        name: 'رسوم خدمات الشحن غير شاملة ضريبة القيمة المضافة',
        active: true,
    }
]

const products = [
    {
        name: 'عرض أسعار المنتجات شاملة الضريبة',
        active: true,
    }
]

const countries = [
    {
        name: 'All Countries (15%)',
        active: true,
    }
]

</script>

<style scoped>
.card-style-color{
    background: #DFE5EF;
}

.team-count{
    width: 100px;
    height: 96px;
    top: 1845px;
    left: 892px;
    gap: 0px;
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 38px 38px 38px 38px;
    opacity: 0px;
    color: white;
    font-size: large;
    background: #5D87FF;
}

.input-icon {
  position: absolute;
  height: 60px;
  right: 5px; /* Icon position */
  transform: translateY(-50%);
  font-size: 38px; /* Icon size */
  color: #888; /* Icon color */
  padding-top: 28px;
  padding-left: 45px;
  padding-right: 45px;
}
</style>
