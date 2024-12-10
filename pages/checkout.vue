<template>
    <div class="flex-1">
        <div class="container mx-auto py-6 px-4 lg:px-0">
            <LayoutDefaultHistory class="text-xs lg:text-base whitespace-nowrap">
                <template v-slot:links>
                    <NuxtLink to="/cart">
                        <client-only>
                            <fa-icon class="mx-2 lg:mx-4" :icon="['fas', 'angle-left']" />
                        </client-only>
                        <span>سلة المشتريات</span>
                    </NuxtLink>
                    <NuxtLink>
                        <client-only>
                            <fa-icon class="mx-2 lg:mx-4" :icon="['fas', 'angle-left']" />
                        </client-only>
                        <span class="text-smooky-300">إنهاء الطلب</span>
                    </NuxtLink>
                </template>
            </LayoutDefaultHistory>

            <!-- page content //////// -->
            <div class="grid lg:grid-cols-12 gap-4">
                <!-- right column ///////// -->
                <div class="lg:col-span-9 pt-16 lg:px-6">
                    <span class="text-xl font-bold">مرحباً بك ! محمد نصر</span>

                    <!-- shipping info ///////// -->
                    <div class="flex flex-col gap-4 py-16">
                        <div class="flex items-center gap-4">
                            <span class="text-sm">1</span>
                            <span class="text-base font-bold flex items-center gap-2">
                                <client-only>
                                    <fa-icon :icon="['fas', 'truck-fast']" />
                                </client-only>
                                <span>الشحن والتوصيل</span>
                            </span>
                            <hr class="flex-1 border-smooky-100" />
                        </div>

                        <span>
                            عنوان التوصيل 
                        </span>

                        <div class="p-4 flex items-center gap-2 cursor-pointer">
                            <img src="~/assets/images/map-icon.png" class="w-5" alt="" />
                            <span>حدد موقعك على الخريطة</span>
                        </div>

                        <UiAddressLocateFromMap />
                      
                        <div class="grid lg:grid-cols-2 gap-2 items-center">
                            <div>
                                <span>اختر الدولة</span>
                                <UiSelect class="border-smooky-50 border-2 p-3" dropdownClasses="w-full mt-2">
                                    <template v-slot:selected-option>
                                        <span class="text-primary-800 font-bold text-sm">السعودية</span>
                                        <img class="flag w-9 rounded-md" src="~/assets/saudi-flag.svg" alt="saudi flag" />
                                    </template>
                                    <template v-slot:options>
                                        <div class="flex items-center py-2 px-4 gap-2 bg-primary-800 text-white hover:bg-primary-800 hover:text-white">
                                            <span class="text-sm font-bold">السعودية</span>
                                            <img class="rounded-md w-8" src="~/assets/saudi-flag.svg" alt="" />
                                            <fa-icon class="mr-auto" :icon="['fas', 'check']" />
                                        </div>
                                        <div class="flex items-center py-2 px-4 gap-2 hover:bg-primary-800 text-primary-800 hover:text-white">
                                            <span class="text-sm font-bold ">الإمارات</span>
                                            <img class="rounded-md w-8" src="~/assets/emirates-flag.svg" alt="" />
                                        </div>
                                    </template>
                                </UiSelect>
                            </div>

                            <div>
                                <span>اختر المدينة</span>
                                <UiSelect class="border-smooky-50 border-2 p-3" dropdownClasses="w-full mt-2">
                                    <template v-slot:selected-option>
                                        <span class="text-primary-800 font-bold text-sm">مكة</span>
                                    </template>
                                    <template v-slot:options>
                                        <div class="flex items-center py-2 px-4 gap-2 bg-primary-800 text-white hover:bg-primary-800 hover:text-white">
                                            <span class="text-sm font-bold">مكة</span>
                                            <fa-icon class="mr-auto" :icon="['fas', 'check']" />
                                        </div>
                                        <div class="flex items-center py-2 px-4 gap-2 hover:bg-primary-800 text-primary-800 hover:text-white">
                                            <span class="text-sm font-bold ">جدة</span>
                                        </div>
                                    </template>
                                </UiSelect>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-2">
                            <UiFormInput type="text" label="الحي" placeholder="اسم الحي" />
                            <UiFormInput type="text" label="الشارع" placeholder="اسم الشارع" />
                        </div>

                        <UiFormInput type="text" label="ملاحظات" placeholder="ملاحظات" />
                    </div>

                    <!-- payment info ////////// -->
                    <div class="flex flex-col gap-4 py-16">
                        <div class="flex items-center gap-4">
                            <span class="text-sm">2</span>
                            <span class="text-base font-bold flex items-center gap-2">
                                <client-only>
                                    <fa-icon :icon="['far', 'credit-card']" />
                                </client-only>
                                <span>طريقة الدفع</span>
                            </span>
                            <hr class="flex-1 border-smooky-100" />
                        </div>

                        <CheckoutPagePayMannerAccordion />
                        
                        <UiSolidButton class="group p-3 my-8">
                            <template v-slot:content>
                                <span>تأكيد الطلبية</span>
                                <fa-icon class="group-hover:-translate-x-2" :icon="['fas', 'arrow-left']" />
                            </template>
                        </UiSolidButton>
                    </div>
                </div>

                <!-- left column ///////// -->
                <div class="lg:col-span-3 lg:pt-16 lg:px-6 flex flex-col gap-4">
                    <div class="flex items-center text-smooky-300 text-lg font-bold border-b-2 border-smooky-100 py-4">
                        <span>ملخص السلة</span>
                        <span class="mr-auto">200 ر.س</span>    
                    </div>
                    <div class="flex items-center text-smooky-300 text-lg font-bold border-b-2 border-smooky-100 py-4">
                        <span>إجمالي الطلب</span>
                        <span class="mr-auto">41 ر.س</span>    
                    </div>
                    <div class="py-4 flex flex-col">
                        <div class="flex items-center gap-2 text-rosy-800">
                            <client-only>
                                <fa-icon :icon="['fas', 'ticket-simple']" />
                            </client-only>
                            <span class="cursor-pointer" @click="showCouponField = !showCouponField">لديك كوبون تخفيض؟</span>
                        </div>
                        <UiFormInput v-show="showCouponField" type="text" placeholder="أدخل كود الكوبون" />
                    </div>
                    <UiSolidButton class="group p-3 my-4">
                        <template v-slot:content>
                            <span>تأكيد الطلبية</span>
                            <fa-icon class="group-hover:-translate-x-2" :icon="['fas', 'arrow-left']" />
                        </template>
                    </UiSolidButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const showCouponField = ref(false)
useHead({
    title: 'صفحة الدفع'
})
</script>