<template>
    <div>
        <h2 class="font-bold text-lg lg:text-xl text-aprimary-600">
            المنتجات ومعلومات العميل
        </h2>

        <div class="flex flex-col gap-8 mt-10">
            <div class="flex flex-col gap-4 ">
                <span class="font-bold lg:text-xl text-black">
                    اختر العملة
                </span>
                <UiAdminSelect class="text-sm lg:text-base">
                    <template v-slot:selected-option>
                        <span>اختر العملة من القائمة</span>
                    </template>
                    <template v-slot:options>
                        <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                            <span>SAR</span>
                        </div>
                        <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                            <span>EUR</span>
                        </div>
                        <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                            <span>USD</span>
                        </div>
                    </template>
                </UiAdminSelect>
            </div>

            <div class="flex flex-col gap-4">
                <span class="font-bold lg:text-xl text-black">
                    اختر المنتجات
                </span>
                <div class="flex relative text-sm lg:text-base">
                    <UiAdminInput class="flex-1" placeholder="بحث في المنتجات"></UiAdminInput>
                    <UiAdminActionButton>
                        <template #content>
                            استعراض
                        </template>
                    </UiAdminActionButton>
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <span class="font-bold lg:text-xl text-black">
                    اختر او  إنشئ عميل
                </span>
                <div class="flex relative text-sm lg:text-base">
                    <UiAdminInput class="flex-1" placeholder="بحث عن عميل"></UiAdminInput>
                    <UiAdminActionButton type="outlined" class="border-r-transparent whitespace-nowrap">
                        <template #content>
                            اضافة عميل جديد+
                        </template>
                    </UiAdminActionButton>
                </div>
            </div>
        </div>
    </div>
</template>