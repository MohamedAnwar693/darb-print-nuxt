<template>
    <LayoutAdminPageHeader title="إعدادات التقييم"></LayoutAdminPageHeader>
    <div class="card-style-color p-4 text-agray-300  mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
        <div class="bg-white p-8 text-agray-300  mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div v-for="rate in ratings" class="flex gap-4 items-center px-5">
                <p class="flex flex-col">
                    <span class="text-lg font-bold">{{ rate.name }}</span>
                </p>
                <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                    <UiAdminToggler :active="rate.active" />
                </div>
            </div>
            <label class="flex flex-col gap-2  px-5">
                <span class="font-bold text-lg">حالات الطلب</span>
                <span>يمكن اختيار عدة حالات للطلب ليتم شملها في إرسال رسالة التقييم</span>
                <UiAdminSelect>
                    <template v-slot:selected-option>
                        <span>قيد التنفيذ</span>
                    </template>
                    <template v-slot:options>
                        <div class="p-4 flex gap-4 hover:bg-asmooky-100" v-for="state in status">
                            <span>{{ state.label }}</span>
                        </div>
                    </template>
                </UiAdminSelect>
            </label>
            <div class="px-5">
                <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 border-b border-agray-400"></div>
            </div>
            <label class="flex flex-col gap-2  px-5">
                <span class="font-bold text-lg">رسالة الشكر</span>
                <UiAdminTextarea placeholder="رسالة الشكر التي ستظهر للعميل بعد الانتهاء من التقييم" style="height: 170px;" class="bg-slate-200 border-2 border-asmooky-200 textareaField"/>
            </label>
            <div class="px-5">
                <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 border-b border-agray-400"></div>
            </div>
            <span class="font-bold text-lg px-5">إرسال رسائل طلب التقييم</span>
            <div v-for="messageRate in messageRates" class="flex gap-4 items-center px-5">
                <p class="flex flex-col">
                    <span class="text-lg ">{{ messageRate.name }}</span>
                </p>
                <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                    <UiAdminToggler :active="messageRate.active" />
                </div>
            </div>
            <div class="px-5">
                <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 border-b border-agray-400"></div>
            </div>
            <div class="px-5">
                <div class="flex flex-col gap-4">
                    <span class="font-bold lg:text-xl">
                        وقت الإرسال بعد اكتمال الطلب
                    </span>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="input-field flex-1" placeholder="100"></UiAdminInput>
                        <img class="input-icon" src="../../../public/images/clock.png" alt=""/>
                        <UiAdminActionButton>
                            <template #content>
                                ساعة
                            </template>
                        </UiAdminActionButton>
                    </div>
                </div>
            </div>

            <div class="px-5">
                <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 border-b border-agray-400"></div>
            </div>
            <div class="flex flex-col gap-4 px-5">
                <span class="font-bold lg:text-xl">
                    موقع الإرسال
                </span>
                <div class="flex relative text-sm lg:text-base">
                    <UiAdminInput class="input-field flex-1" placeholder="البريد الالكتروني"></UiAdminInput>
                    <img class="input-icon" src="../../../public/images/email.png" alt=""/>
                </div>
            </div>
            <div class="px-5">
                <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 border-b border-agray-400"></div>
            </div>
            <div class="flex flex-col gap-4 px-5">
                <span class="font-bold lg:text-xl">
                    عنوان الرسالة
                </span>
                <div class="flex relative text-sm lg:text-base">
                    <UiAdminInput class="input-field flex-1" placeholder="نتمنى ان نعرف رايك من متجر"></UiAdminInput>
                    <img class="input-icon" src="../../../public/images/message-info.png" alt=""/>
                </div>
            </div>
            <div class="px-5">
                <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 border-b border-agray-400"></div>
            </div>
            <div class="flex flex-col gap-4 px-5">
                <span class="font-bold text-lg">نص الرسالة</span>
                <div class="flex relative text-sm lg:text-base">
                    <UiAdminTextarea placeholder="  |   ي {Name} صديقة متجر ..... ، شاركنا رايك بمنتجاتنا عشان نحسن تجربتك معنا و نخدمك بشكل يليق بك في الطلبات القادمة" class="bg-slate-200 border-2 border-asmooky-200 textareaField"/>
                    <img class="textareaImg" src="../../../public/images/Frame.png" alt=""/>
                </div>
            </div>
            <div class="grid lg:grid-cols-3 gap-8 lg:gap-12 px-5">
                <div>
                    <span class="text-aprimary-600 px-2">رابط الطلب:</span>
                    <span class="order_link">https://testtest.com</span>
                </div>
                <div>
                    <span class="text-aprimary-600 px-2">الاسم:</span>
                    <span class="order_link">newUser</span>
                </div>
                <div>
                    <span class="text-aprimary-600 px-2">رقم الطلب:</span>
                    <span class="order_link">16867618066245985</span>
                </div>
            </div>
            <div class="card_style">
                <div class="mt-2 px-4 font-bold lg:text-xl">
                    ي {Name} صديقة متجر ..... ، شاركنا رايك بمنتجاتنا عشان نحسن تجربتك معنا و نخدمك بشكل يليق بك في الطلبات القادمة
                </div>
            </div>
            <div class="lg:col-span-2 mt-12 text-left ml-10 mr-10 mb-10">
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
useHead({ title: 'لوحة التحكم - إنشاء منتج',})

const ratings = [
    {
        name: 'نشر تقييم المتجر تلقائيا',
        active: false,
    },
    {
        name: 'نشر تقييم المنتجات تلقائيا',
        active: false,
    },
    {
        name: 'طلب تقييم  المتجر',
        active: true,
    },
    {
        name: 'طلب تقييم شركة الشحن',
        active: false,
    },
    {
        name: 'طلب تقييم المنتجات',
        active: true,
    },
    {
        name: 'عرض آراء العملاء ',
        active: true,
    },
    {
        name: 'إظهار التقييمات على التطبيق',
        active: true,
    }
]

const status = [
    {
        label: 'تم الارسال',
    },
    {
        label: 'جارى التنفيذ',
    },
    {
        label: 'تم التنفيذ',
    }
]

const messageRates = [
    {
        name: 'تفعيل خيار ارسال رسائل التنبيه للعملاء للتقييم',
        active: true,
    },
]

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
  /* border: 1px solid #ccc;
  border-radius: 5px; */
}

.input-icon {
  position: absolute;
  right: 5px; /* Icon position */
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px; /* Icon size */
  color: #888; /* Icon color */
}


/*/////// Textarea message content design /////////*/
.textareaField{
    width:100%;
    height: 170px;
    padding-left: 50px; /* Space for the icon */
    padding-right: 50px;
    background: #EAEFF4;
}

.textareaImg{
    position: absolute;
    top: 16%;
    margin-left: 10px;
    margin-right: 10px;
    transform: translateY(-50%);
    font-size: 20px;
    color: gray;
}

.textarea-wrapper {
    position: relative;
}
/*/////// end of Textarea message content  ///////*/

.order_link{
    width: 100px;
    height: 96px;
    top: 1845px;
    left: 892px;
    gap: 0px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 38px 38px 38px 38px;
    opacity: 0px;
    background: #EAEFF4;
}

.card_style{
    width: 722px;
    height: 102px;
    gap: 0px;
    text-align: center;
    color: #0074BA;
    max-inline-size: 90%;
    border-radius: 31px 31px 31px 31px;
    opacity: 20px;
    background: #EFF9FF;
    box-shadow: 0px 0px 14px 0px #00000040;
    margin-top: 80px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
}

</style>