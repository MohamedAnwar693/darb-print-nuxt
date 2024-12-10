<template>
    <div class="flex flex-col gap-4 py-10">
        <div class="flex flex-col gap-4">
            <span class="text-xl font-extrabold my-4">أخبرنا عن مشروعك</span>
            <span class="text-xl font-extrabold my-4">تفاصيل الطلب</span>
        </div>
        <div class="flex flex-col gap-12">
            <div class="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                <div class="lg:w-48">
                    <p class="font-bold">تاريخ التسليم</p>
                    <p>متى ترغب باستلام المنتجات </p>
                </div>
                <div class="lg:grid lg:grid-cols-2 gap-8 flex-1">
                    <UiDateInput class="gap-0" defaultValue="06-04-2023"/>
                    <div class="border-2 border-smooky-100 p-2 mt-2 flex items-center gap-2">
                        <input type="checkbox" name="" id="" />
                        <span>غير محدد</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row gap-8">
                <div class="lg:w-48">
                    <p class="font-bold">معلومات التواصل</p>
                    <p>أخبرنا كيف يمكننا التواصل معك</p>
                </div>
                <div class="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-8 flex-1">
                    <!-- name ////// -->
                    <UiIconedFormInput type="text" placeholder="الإسم">
                        <template v-slot:icon>
                            <client-only>
                                <fa-icon class="text-2xl" :icon="['far', 'circle-user']" />
                            </client-only>
                        </template>
                    </UiIconedFormInput>

                    <!-- company name ////// -->
                    <UiIconedFormInput type="text" placeholder="اسم الشركة">
                        <template v-slot:icon>
                            <client-only>
                                <fa-icon class="text-xl" :icon="['fas', 'home']" />
                            </client-only>
                        </template>
                    </UiIconedFormInput>

                    <!-- mobile number ////// -->
                    <UiPhoneNumberInput class="lg:col-span-2" />

                    <!-- company email /////// -->
                    <UiIconedFormInput class="lg:col-span-2" type="email" placeholder="ايميل الشركة">
                        <template v-slot:icon>
                            <client-only>
                                <fa-icon class="text-xl" :icon="['far', 'envelope']" />
                            </client-only>
                        </template>
                    </UiIconedFormInput>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row lg:items-center gap-8">
                <div class="lg:w-48">
                    <p class="font-bold">أي شيء ينبغي أن نعرفه؟</p>
                    <p>الخطوة الأخيرة!</p>
                </div>
                <UiIconedFormInput class="flex-1" type="text" placeholder="توصيات ، أسئلة أو ملاحظات؟">
                    <template v-slot:icon>
                        <client-only>
                            <fa-icon class="text-xl" :icon="['far', 'comments']" />
                        </client-only>
                    </template>
                </UiIconedFormInput>
            </div>

            <div class="flex flex-col lg:flex-row lg:items-center gap-8">
                <div class="lg:w-48"></div>
                <div class="flex flex-col flex-1 text-sm gap-4">
                    <UiSolidButton class="p-2">
                        <template v-slot:content>
                            ارسل طلبك
                        </template>
                    </UiSolidButton>
                    <span class="m-auto">غالبا ما يتم الرد خلال اقل من 24 ساعه</span>
                </div>
            </div>
        </div>
    </div>
</template>