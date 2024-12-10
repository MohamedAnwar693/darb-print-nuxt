<template>
    <label class="flex items-center hover:bg-smooky-50 cursor-pointer">
        <span class="m-auto text-xl flex items-center gap-2">
            <client-only>
                <fa-icon :icon="['fas' ,'upload']" />
            </client-only> 
            <span>رفع ملف</span>
        </span>
        <input type="file" class="hidden" >
    </label>
</template>