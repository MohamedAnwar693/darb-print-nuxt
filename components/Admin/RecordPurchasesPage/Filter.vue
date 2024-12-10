<template>
    <div>
        <div class="flex flex-wrap items-center lg:gap-2 xl:gap-4 border-b">
            <div v-for="tab in tabs" 
            @click="activeTab = tab.key"
            :class="[
                activeTab == tab.key ? 'text-aprimary-600 border-b-4 border-aprimary-600' : '',
                'whitespace-nowrap p-4 text-xs lg:text-sm flex items-center gap-2 cursor-pointer hover:text-aprimary-600 hover:border-b-4 hover:border-aprimary-600'
            ]">
                <span>{{ tab.label }}</span>
                <span class="text-white bg-aprimary-600 px-2 number-style">{{ tab.number }}</span>
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
        number: 9
    },
    {
        label: 'جديد',
        key: 'enabled',
        number: 5
    },
    {
        label: 'قيد المعالجة',
        key: 'disabled',
        number: 2
    },
    {
        label: 'دفعت',
        key: 'paid',
        number: 2
    },
    {
        label: 'رفضت',
        key: 'refused',
        number: 0
    }
]
</script>

<style scoped>
.number-style{
    border-radius: 90px 90px 90px 90px;
    padding-top: 3px;
    padding-bottom: 1px;
}
</style>