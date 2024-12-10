<template>
    <div>
        <div class="bg-white lg:p-2 xl:p-8 flex flex-col gap-6">
            <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 border-b border-agray-400">
                <div v-for="tab in tabs" 
                @click="activeTab = tab.key"
                :class="[
                    activeTab == tab.key ? 'text-aprimary-600 border-b-4 border-aprimary-600' : '',
                    'whitespace-nowrap p-4 text-xs lg:text-sm flex items-center gap-2 cursor-pointer hover:text-aprimary-600 hover:border-b-4 hover:border-aprimary-600'
                ]">
                    <span>{{ tab.label }}</span>
                    <span class="text-aprimary-400 bg-asmooky-100 px-2">{{ tab.number }}</span>
                </div>
            </div>

            <div class="flex p-1 lg:p-0 text-xs lg:text-base">
                <UiAdminSelect class="items-stretch" custom-classes="border-2 border-asmooky-200 p-0 lg:p-1">
                    <template v-slot:selected-option>
                        <span>تصفية القسائم</span>
                    </template>
                    <template v-slot:options>
                        <div class="flex flex-col">
                            <span v-for="tab in tabs" class="p-2 hover:bg-asmooky-100">{{ tab.label }}</span>
                        </div>
                    </template>
                </UiAdminSelect>
                <UiAdminInput class="border-2 border-asmooky-200 flex-1" placeholder="ابحث باسم القسيمة أو الرمز" />
                <UiAdminActionButton class="lg:w-28">
                    <template #content>
                        <span class="hidden lg:block">بحث</span> 
                        <span class="block lg:hidden">   
                           <Icon name="ic:baseline-search" />
                        </span>
                    </template>
                </UiAdminActionButton>
            </div>
        </div>
    </div>
</template>

<script setup>
const activeTab = ref('all')
const tabs = [
    {
        label: 'الكل',
        key: 'all',
        number: 0
    },
    {
        label: 'مفعل',
        key: 'enabled',
        number: 0
    },
    {
        label: 'معطل',
        key: 'disabled',
        number: 0
    },
    {
        label: 'ملغي',
        key: 'cancled',
        number: 0
    }
]
</script>