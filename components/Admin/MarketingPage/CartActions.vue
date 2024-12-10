<template>
    <div class="flex items-center text-sm">
        <div class="flex items-center gap-2">
            <span>عدد السلات المعروضة فى الصفحة :</span>
            <UiAdminSelect class="bg-white">
                <template v-slot:selected-option>
                    <span>10 سلة</span>
                </template>
                <template v-slot:options>
                    <div class="flex flex-col">
                        <span class="p-2 hover:bg-white">10 سلة</span>
                        <span class="p-2 hover:bg-white">20 سلة</span>
                        <span class="p-2 hover:bg-white">50 سلة</span>
                        <span class="p-2 hover:bg-white">100 سلة</span>
                    </div>
                </template>
            </UiAdminSelect>
        </div>

        <button class="bg-agray-200 p-2 border border-agray-400 mr-auto text-aprimary-600">
            <span class="hidden lg:inline">تصدير البيانات</span>   
            <Icon name="ic:round-download" size="1.1rem" />               
        </button>
    </div>
</template>