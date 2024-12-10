<template>
    <div class="grid lg:grid-cols-2 gap-8">
        <div class="flex flex-col gap-4">
            <div class="flex gap-4 items-center px-5">
                <p class="flex flex-col">
                    <span class="text-lg font-bold">عرض النشرة البريدية</span>
                </p>
                <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                    <UiAdminToggler :active="showLetter" @update:status="showLetter = !showLetter" />
                </div>
            </div>

            <template v-if="showLetter">
                <label class="flex flex-col gap-2">
                    <span class="font-bold">
                        عنوان النشرة البريدية
                    </span>
                    <UiAdminInput />
                </label>
    
                <label class="flex flex-col gap-2">
                    <span class="font-bold">
                        رابط نموذج النشرة البريدية
                    </span>
                    <UiAdminInput />
                </label>
            </template>
        </div>

        <div class="flex flex-col gap-4">
            <div class="flex gap-4 items-center px-5">
                <p class="flex flex-col">
                    <span class="text-lg font-bold">عرض الخريطة</span>
                </p>
                <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                    <UiAdminToggler :active="showMap" @update:status="showMap = !showMap" />
                </div>
            </div>
    
            <label v-if="showMap" class="flex flex-col gap-2">
                <span class="font-bold">
                    رابط الخريطة
                </span>
                <UiAdminInput  placeholder="ضع الرابط هنا "/>
            </label>
        </div>

        <div class="flex flex-col gap-2">
            <span class="text-lg font-bold">روابط مهمة</span>
            <UiAdminSelect>
                <template v-slot:selected-option>
                    <span>اختر الرابط من القائمة</span>
                </template>
                <template v-slot:options>
                    <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                        <span>رابط</span>
                    </div>
                    <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                        <span>رابط</span>
                    </div>
                    <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                        <span>رابط</span>
                    </div>
                </template>
            </UiAdminSelect>
            <UiAdminInput class="text-center" placeholder="ضع الرابط هنا " />
        </div>

        <div class="flex flex-col gap-2">
            <span class="text-lg font-bold">وسائل التواصل</span>
            <UiAdminSelect>
                <template v-slot:selected-option>
                    <span>إختر وسائل التواصل من القائمة</span>
                </template>
                <template v-slot:options>
                    <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                        <span>رابط</span>
                    </div>
                    <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                        <span>رابط</span>
                    </div>
                    <div class="p-4 flex gap-4 hover:bg-asmooky-100">
                        <span>رابط</span>
                    </div>
                </template>
            </UiAdminSelect>
            <UiAdminInput class="text-center" placeholder="ضع الرابط هنا " />
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
const showLetter = ref(true)
const showMap = ref(true)
</script>