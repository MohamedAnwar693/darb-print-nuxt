<template>
    <LayoutAdminPageHeader title="بيانات المتجر"></LayoutAdminPageHeader>
    <div class="card-style-color p-4 text-agray-300  mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
        <label class="flex flex-col gap-2 mx-auto">
            <span class="mt-4 font-bold text-lg text-center">صورة المتجر</span>
            <label class="flex border-2 border-asmooky-200 w-full p-4 cursor-pointer hover:border-2 hover:border-aprimary-600">
                <div class="py-4 flex flex-col gap-2 text-center mx-auto">
                    <img  src="../../../public/images/arrow-up-dashed-square.png" alt=""/>
                    <slot class="whitespace-nowrap" name="text"></slot>
                </div>
                <input type="file" class="hidden" />
            </label>
            <span class="font-bold text-lg text-center">الشعار يظهر صغير في متجرك</span>
        </label>
        <div class="bg-white p-8 text-agray-300  mt-4 mb-4 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 ">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            اسم المتجر
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="اسم المتجر"></UiAdminInput>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            رابط المتجر
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="www.example.com"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 ">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            نبذة عم المتجر
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="وصف المتجر"></UiAdminInput>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            الموقع
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="رفع شعار ايقونة المتجر"></UiAdminInput>
                    </div>
                    <span>المقاس الانسب 32 بكسل عرض 32 بكسل ارتفاع</span>
                </div>
            </div>
            <div class="lg:col-span-2 mt-4 text-left ml-6 mr-8 mb-4">
                <UiAdminActionButton>
                    <template #content>
                        حفظ
                    </template>
                </UiAdminActionButton>
            </div>
        </div>
    </div>
    <div class="card-style-color p-4 mb-6 text-agray-300  mt-12 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="text-xl lg:text-2xl font-bold mt-4">نشاط المتجر</span>
        <div class="bg-white p-8 text-agray-300 mb-4 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 ">
                <label class="flex flex-col gap-2  px-5">
                    <span class="font-bold text-lg">نشاط المتجر</span>
                    <span>لتقديم افضل تجربة لكم على منصة رواد يرجى اختيار نشاط المتجر الاساسي</span>
                    <UiAdminSelect>
                        <template v-slot:selected-option>
                            <span>العناية الشخصية, العود و البخور</span>
                        </template>
                        <template v-slot:options>
                            <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                                <span></span>
                            </div>
                        </template>
                    </UiAdminSelect>
                </label>
            </div>
            <div class="lg:col-span-2 mt-4 text-left ml-6 mr-8 mb-4">
                <UiAdminActionButton>
                    <template #content>
                        حفظ
                    </template>
                </UiAdminActionButton>
            </div>
        </div>
    </div>
    <div class="card-style-color p-4 mb-2 text-agray-300  mt-12 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="text-xl lg:text-2xl font-bold mt-4">وسائل التواصل</span>
        <div class="bg-white p-8 text-agray-300 mb-4 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 mt-8">
                <div class="flex flex-col gap-4 px-5">
                    <span class="font-bold lg:text-xl">
                        رقم الهاتف
                    </span>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="input-field flex-1" placeholder="9665XXXXXXXX"></UiAdminInput>
                        <img class="input-icon" src="../../../public/images/socialMedia/phone-icon.png" alt=""/>
                        <UiAdminActionButton>
                            <template #content>
                                تحديث
                            </template>
                        </UiAdminActionButton>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <span class="font-bold lg:text-xl">
                        رقم الهاتف بالصيغة الدولية
                    </span>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="input-field flex-1" placeholder="9665XXXXXXXX+"></UiAdminInput>
                        <img class="input-icon" src="../../../public/images/socialMedia/phone-icon.png" alt=""/>
                        <UiAdminActionButton>
                            <template #content>
                                تحديث
                            </template>
                        </UiAdminActionButton>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 ">
                <div class="flex flex-col gap-4 px-5">
                    <span class="font-bold lg:text-xl">
                        الواتس اب
                    </span>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="input-field flex-1" placeholder="رقم الواتس اب"></UiAdminInput>
                        <img class="input-icon" src="../../../public/images/socialMedia/whatsapp-icon.png" alt=""/>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <span class="font-bold lg:text-xl">
                        تيلجرام
                    </span>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="input-field flex-1" placeholder="رابط الاضافة في التلغرام"></UiAdminInput>
                        <img class="input-icon" src="../../../public/images/socialMedia/telegram-icon.png" alt=""/>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 ">
                <div class="flex flex-col gap-4 px-5">
                    <span class="font-bold lg:text-xl">
                        البريد الالكتروني 
                    </span>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="input-field flex-1" placeholder="example@test.com"></UiAdminInput>
                        <img class="input-icon" src="../../../public/images/email.png" alt=""/>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <span class="font-bold lg:text-xl">
                        الانستغرام
                    </span>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="input-field flex-1" placeholder="@example"></UiAdminInput>
                        <img class="input-icon" src="../../../public/images/socialMedia/instagram-icon.png" alt=""/>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 ">
                <div class="flex flex-col gap-4 px-5">
                    <span class="font-bold lg:text-xl">
                        الفيسبوك 
                    </span>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="input-field flex-1" placeholder="رابط الفيسبوك"></UiAdminInput>
                        <img class="input-icon" src="../../../public/images/socialMedia/facebook-icon.png" alt=""/>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <span class="font-bold lg:text-xl">
                        سناب شات
                    </span>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="input-field flex-1" placeholder="رابط السناب شات"></UiAdminInput>
                        <img class="input-icon" src="../../../public/images/socialMedia/snapchat-icon.png" alt=""/>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 ">
                <div class="flex flex-col gap-4 px-5">
                    <span class="font-bold lg:text-xl">
                        التيك توك
                    </span>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="input-field flex-1" placeholder=" رابط التيك توك"></UiAdminInput>
                        <img class="input-icon" src="../../../public/images/socialMedia/tiktok-icon.png" alt=""/>
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
    </div>
</template>

<script setup>

definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الإعدادات',})


</script>

<style scoped>
.card-style-color{
    background: #DFE5EF;
}

.input-field {
  padding-left: 50px; /* Space for the icon */
  padding-right: 50px;
  width: 200px;
  height: 40px;
  font-size: 16px;
}

.input-icon {
  position: absolute;
  right: 5px; /* Icon position */
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px; /* Icon size */
  color: #888; /* Icon color */
}

</style>
