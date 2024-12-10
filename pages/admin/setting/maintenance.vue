<template>
    <LayoutAdminPageHeader title="وضع الصيانة"></LayoutAdminPageHeader>
    <div class="card-style-color p-4 text-agray-300  mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
        <div class="bg-white p-8 text-agray-300 mb-2 mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div v-for="maintenance in maintenances" class="flex gap-4 items-center px-5">
                <p class="flex flex-col">
                    <span class="text-lg font-bold">{{ maintenance.name }}</span>
                </p>
                <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                    <UiAdminToggler :active="maintenance.active" />
                </div>
            </div>
            <span class="text-style px-5 text-lg font-bold">عد تفعيل وضع الصيانة ستتمكن لوحدك من الدخول للمتجر و العمل على تجهيزه، بينما العملاء ستظهر لهم صفحة الصيانة، للاطلاع عليها قم بالدخول على متجرك من متصفح آخر او بتسجيل الخروج من لوحة التحكم</span>
            <div class="grid lg:grid-cols-2 gap-12 mb-4 mt-8">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            العنوان الرئيسي للصيانة
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="input-field flex-1" placeholder="تحت الصيانة"></UiAdminInput>
                        <img class="input-icon" src="../../../public/images/Mask-group-2.png" alt=""/>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            رسالة الصيانة
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="input-field flex-1" placeholder="عذرا عزيزي العميل، المتجر حاليا قيد الصيانة و سنعاود العمل خلال دقائق"></UiAdminInput>
                        <img class="input-icon" src="../../../public/images/Mask-group.png" alt=""/>
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
    </div>


</template>

<script setup>

definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الإعدادات',})

const maintenances = [
    {
        name: 'اسم المتجر',
        active: true,
    },
]

</script>

<style scoped>
.card-style-color{
    background: #DFE5EF;
}
.text-style{
    max-inline-size: 80%;
}

.input-field {
  padding-left: 40px; /* Space for the icon */
  padding-right: 40px;
  width: 200px;
  height: 40px;
  font-size: 16px;
}

.input-icon {
  position: absolute;
  right: 2px; /* Icon position */
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px; /* Icon size */
  color: #888; /* Icon color */
}
</style>
