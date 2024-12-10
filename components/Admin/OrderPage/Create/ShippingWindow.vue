<template>
    <div>
        <h2 class="font-bold text-lg lg:text-xl text-aprimary-600">
            طريقة التوصيل
        </h2>
        <div class="flex flex-col gap-8 mt-10">
            <!-- shipping address ///////// -->
            <div class="flex flex-col gap-8">
                <span class="font-bold lg:text-xl text-black">
                    طريقة التوصيل
                </span>

                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-2">
                        <input type="checkbox" />
                        <span class="font-bold">
                            توصيل إلى الموقع
                        </span>
                    </div>
                    <div class="text-sm lg:text-base">
                        <UiAdminSelect class="flex-1" >
                            <template v-slot:selected-option>
                                <span>(SAR 200.00) سلس</span>
                            </template>
                            <template v-slot:options>
                                
                            </template>
                        </UiAdminSelect>
                    </div>
                </div>

                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-2">
                        <input type="checkbox" />
                        <span class="font-bold">
                            توصيل إلى الموقع
                        </span>
                    </div>
                    <div class="text-sm lg:text-base">
                        <UiAdminSelect class="flex-1" >
                            <template v-slot:selected-option>
                                <span>(SAR 200.00) سلس</span>
                            </template>
                            <template v-slot:options>
                                
                            </template>
                        </UiAdminSelect>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>