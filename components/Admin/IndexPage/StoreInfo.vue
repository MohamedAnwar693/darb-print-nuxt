<template>
    <AdminIndexPageSection>
        <template v-slot:title>
            معلومات المتجر 
        </template>
        <template v-slot:sub-title>
            ادخل اسم المتجر ونوع الكيان
        </template>
        <template v-slot:content>
            <label class="flex flex-col gap-2">
                <span class="font-bold">اسم المتجر</span>
                <UiAdminInput placeholder="اسم المتجر باللغه العربية"/>
                <UiAdminInput placeholder="اسم المتجر باللغه الانجليزية"/>
            </label>

            <div class="flex flex-col gap-2">
                <span class="font-bold">نوع الكيان</span>
                <div class="flex flex-wrap gap-4">
                    <label v-for="entity in entityTypes">
                        <button 
                        @click="selectedEntity = entity.label"
                        :class="[
                            selectedEntity == entity.label ? 'bg-aprimary-600 text-white' : 'border-agray-400',
                            'p-3 w-[150px] font-bold border hover:border hover:border-aprimary-400'
                        ]">{{ entity.label }}</button>
                    </label>
                </div>
            </div>
        </template>
    </AdminIndexPageSection>
</template>

<script setup>
const selectedEntity = ref('فرد')
const entityTypes = [
    {
        label: 'فرد'
    },
    {
        label: 'مؤسسة'
    },
    {
        label: 'شركة'
    }
]
</script>