<template>
    <div class="grid lg:grid-cols-2 gap-8">
        <div>
            <div class="flex gap-4 items-center px-5">
                <p class="flex flex-col">
                    <span class="text-lg font-bold">اظهار شعار المتجر</span>
                </p>
                <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                    <UiAdminToggler :active="showLogo" @update:status="showLogo = !showLogo"/>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-4">
            <div class="flex gap-4 items-center px-5">
                <p class="flex flex-col">
                    <span class="text-lg font-bold">اظهار اللغة</span>
                </p>
                <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                    <UiAdminToggler :active="showLang" @update:status="showLang = !showLang" />
                </div>
            </div>
            <div v-if="showLang" class="p-4">
                <UiAdminSelect>
                    <template v-slot:selected-option>
                        <span>اختر اللغة من القائمة</span>
                    </template>
                    <template v-slot:options>
                        <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                            <span>EUR</span>
                        </div>
                        <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                            <span>DZD</span>
                        </div>
                        <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                            <span>USD</span>
                        </div>
                    </template>
                </UiAdminSelect>
            </div>
        </div>

        <div class="flex flex-col gap-4">
            <div class="flex gap-4 items-center px-5">
                <p class="flex flex-col">
                    <span class="text-lg font-bold">العملات المدعومة</span>
                </p>
                <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                    <UiAdminToggler :active="showCoins" @update:status="showCoins = !showCoins" />
                </div>
            </div>
    
            <div class="p-4" v-if="showCoins">
                <UiAdminSelect>
                    <template v-slot:selected-option>
                        <span>اختر العملات من القائمة</span>
                    </template>
                    <template v-slot:options>
                        <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                            <span>EUR</span>
                        </div>
                        <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                            <span>DZD</span>
                        </div>
                        <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                            <span>USD</span>
                        </div>
                    </template>
                </UiAdminSelect>
            </div>
        </div>
 
        <div>
            <div class="flex gap-4 items-center px-5">
                <p class="flex flex-col">
                    <span class="text-lg font-bold">اظهار شريط البحث</span>
                </p>
                <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                    <UiAdminToggler :active="showSearchBar" @update:status="showSearchBar = !showSearchBar"/>
                </div>
            </div>
        </div>

        <div class="lg:col-span-2 mt-12 text-center">
            <UiAdminActionButton>
                <template #content>
                    حفظ التغييرات
                </template>
            </UiAdminActionButton>
        </div>
    </div>
</template>

<script setup>
const showLogo = ref(true)
const showLang = ref(false)
const showCoins = ref(false)
const showSearchBar = ref(true)
</script>