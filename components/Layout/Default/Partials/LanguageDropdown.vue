<template>
    <UiSelect dropdownClasses="w-32">
        <template v-slot:selected-option>
            <img class="flag w-9 rounded-md" src="~/assets/saudi-flag.svg" alt="saudi flag" />
            <span class="text-primary-800 font-bold text-sm">SA</span>
        </template>
        <template v-slot:options>
            <div class="flex items-center py-2 px-4 gap-2 bg-primary-800 text-white hover:bg-primary-800 hover:text-white">
                <img class="rounded-md w-8" src="~/assets/saudi-flag.svg" alt="" />
                <span class="text-sm font-bold">SA</span>
                <fa-icon class="mr-auto" :icon="['fas', 'check']" />
            </div>
            <div class="flex items-center py-2 px-4 gap-2 hover:bg-primary-800 text-primary-800 hover:text-white">
                <img class="rounded-md w-8" src="~/assets/emirates-flag.svg" alt="" />
                <span class="text-sm font-bold ">AE</span>
            </div>
        </template>
    </UiSelect>
</template>