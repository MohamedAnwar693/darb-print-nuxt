<template>
    <div>
        <div class="flex items-center text-lg gap-8 text-sm lg:text-base">
            <span class="font-bold w-16 lg:w-32 text-sm lg:text-base">الكمية</span>
            <UiSelect class="border border-smooky-250 p-3 flex-1" dropdownClasses="w-full">
                <template v-slot:selected-option>
                    100
                </template>
                <template v-slot:options>
                    <div class="flex items-center cursor-pointer bg-primary-800 text-white p-3 hover:bg-primary-800 hover:text-white">
                        100 (10 ريال / الحبة)
                        <fa-icon class="mr-auto" :icon="['fas', 'check']" />
                    </div>
                    <div class="flex items-center cursor-pointer bg-white p-3 hover:bg-primary-800 hover:text-white">
                        200 (9.5 ريال / الحبة)
                    </div>
                </template>
            </UiSelect>
        </div>

        <div class="flex items-center text-lg gap-8 text-sm lg:text-base">
            <span class="font-bold w-16 lg:w-32 text-sm lg:text-base">عدد مجموع الكراتين</span>
            <UiSelect class="border border-smooky-250 p-3 flex-1" dropdownClasses="w-full">
                <template v-slot:selected-option>
                    قم باختيار عدد الكراتين
                </template>
                <template v-slot:options>
                    <div class="flex items-center cursor-pointer bg-primary-800 text-white p-3 hover:bg-primary-800 hover:text-white">
                        100
                        <fa-icon class="mr-auto" :icon="['fas', 'check']" />
                    </div>
                    <div class="flex items-center cursor-pointer bg-white p-3 hover:bg-primary-800 hover:text-white">200</div>
                </template>
            </UiSelect>
        </div>

        <div class="flex items-center text-lg gap-8 text-sm lg:text-base">
            <span class="font-bold w-16 lg:w-32 text-sm lg:text-base">أوجه الطباعة</span>
            <UiSelect class="border border-smooky-250 p-3 flex-1" dropdownClasses="w-full">
                <template v-slot:selected-option>
                    عدد أوجه الطباعة
                </template>
                <template v-slot:options>
                    <div class="flex items-center cursor-pointer bg-primary-800 text-white p-3 hover:bg-primary-800 hover:text-white">
                        100
                        <fa-icon class="mr-auto" :icon="['fas', 'check']" />
                    </div>
                    <div class="flex items-center cursor-pointer bg-white p-3 hover:bg-primary-800 hover:text-white">200</div>
                </template>
            </UiSelect>
        </div>

        <div class="flex items-center text-lg gap-8 text-sm lg:text-base">
            <span class="font-bold w-16 lg:w-32 text-sm lg:text-base">طريقة الطباعة</span>
            <UiSelect class="border border-smooky-250 p-3 flex-1" dropdownClasses="w-full">
                <template v-slot:selected-option>
                    هل ترغب بطباعة كتابة أم صورة؟
                </template>
                <template v-slot:options>
                    <div class="flex items-center cursor-pointer bg-primary-800 text-white p-3 hover:bg-primary-800 hover:text-white">
                        كتابة
                        <fa-icon class="mr-auto" :icon="['fas', 'check']" />
                    </div>
                    <div class="flex items-center cursor-pointer bg-white p-3 hover:bg-primary-800 hover:text-white">صورة</div>
                </template>
            </UiSelect>
        </div>
        
        <div class="flex items-center text-lg gap-8 mt-8 text-sm lg:text-base">
            <span class="font-bold w-16 lg:w-32 text-sm lg:text-base">الألوان</span>
            <div class="flex flex-wrap gap-4">
                <span :style="`background-color:${color};`" v-for="color in colors" class="shadow ring-1 ring-smooky-150 border-2 border-white rounded-full h-8 w-8"></span>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-2 items-center mt-5">
            <button @click="showNoteField = !showNoteField, showFileUploader = false" class="border-smooky-250 py-3 border flex items-center gap-3 justify-center">
                <client-only>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M10.7525 3.78642L13.5389 1L18.4151 5.87623L15.6287 8.66261M10.7525 3.78642L1.28854 13.2503C1.1038 13.4351 1 13.6857 1 13.9469V18.4151H5.46816C5.72944 18.4151 5.98002 18.3113 6.16477 18.1265L15.6287 8.66261M10.7525 3.78642L15.6287 8.66261" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </client-only>
                <span>كتابة ملاحظة</span>
            </button>

            <button @click="showFileUploader = !showFileUploader, showNoteField = false" class="border-smooky-250 py-3 border flex items-center gap-3 justify-center">
                <client-only>
                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 14.016V5.88101C1 4.98244 1.72843 4.254 2.627 4.254H3.03375C3.54586 4.254 4.02809 4.01289 4.33535 3.6032L6.14133 1.19524C6.23351 1.07234 6.37818 1 6.53181 1H11.7382C11.8919 1 12.0365 1.07234 12.1287 1.19524L13.9347 3.6032C14.2419 4.01289 14.7242 4.254 15.2363 4.254H15.643C16.5416 4.254 17.27 4.98244 17.27 5.88101V14.016C17.27 14.9146 16.5416 15.643 15.643 15.643H2.627C1.72843 15.643 1 14.9146 1 14.016Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.13511 12.3891C10.9322 12.3891 12.3891 10.9322 12.3891 9.13511C12.3891 7.338 10.9322 5.8811 9.13511 5.8811C7.33797 5.8811 5.8811 7.338 5.8811 9.13511C5.8811 10.9322 7.33797 12.3891 9.13511 12.3891Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </client-only>
                <span>إرفاق ملف</span>
            </button>

            <UiFileUploader v-show="showFileUploader" class="col-span-2 border-smooky-250 px-3 py-16 border" />
            <textarea v-show="showNoteField" placeholder="ملاحظات .." class="col-span-2 border-smooky-250 p-3 border" rows="5"></textarea>
        </div>

        <div class="title">
            <p>200 ر.س</p>
        </div>

        <div>
            <button class="hover:border-primary-800 hover:bg-transparent border-2 hover:text-primary-800 w-full bg-primary-800 text-white flex items-center justify-center py-3">
                <span class="font-bold">أضف للسلة</span>
            </button>
        </div>
    </div>
</template>

<script setup>
const showNoteField = ref(false)
const showFileUploader = ref(false)
const colors = [
    '#E0C69F',
    '#319B31',
    '#FF8C00',
    '#89B34B',
    '#85E7FF',
    '#EADD1F',
    '#133F7C',
    '#FF0000',
    '#FFFFFF',
    '#000000'
]
</script>