<template>
    <div class="flex items-center text-sm">
        <div class="flex items-center gap-2">
            <button class="flex items-center gap-2 bg-agray-200 p-2 border border-agray-400">
                <span class="hidden lg:inline">حذف العملاء</span>
                <Icon name="material-symbols:delete-outline-sharp" size="1.1rem" />   
            </button>
            <button class="flex items-center gap-2 bg-agray-200 p-2 border border-agray-400">
                <span class="hidden lg:inline">تصدير</span>   
                <icon name="solar:download-minimalistic-bold" size="1.1rem" />                
            </button>
        </div>
        <button class="mr-auto flex items-center gap-2 bg-agray-200 p-2 border border-agray-400 text-aprimary-600">
            <span class="hidden lg:inline">تصدير بيانات العملاء</span>
            <icon name="solar:download-minimalistic-bold" size="1.1rem" />                
        </button>
    </div>
</template>