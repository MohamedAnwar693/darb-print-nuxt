<template>
    <div class="bg-inherit p-1 lg:p-5 flex items-center gap-8 font-bold z-20">
        <button @click="$emit('toggleSidebar')" class="text-aprimary-600">
            <Icon name="prime:bars" size="2rem" />
        </button>

        <a href="" class="text-agray-300">
            <Icon name="ep:refresh" size="1.5rem" />
        </a>

        <button class="hidden lg:block text-agray-300">
            سجل تحديثات المنصة
        </button>

        <UiAdminSelect class="mr-auto" custom-classes="border-transparent">
            <template v-slot:selected-option>
                <button class="flex items-center gap-2 text-agray-300 mr-auto">
                    <img src="~/assets/images/user-5.png" class="w-8 rounded-full" alt="">
                    <span>محمود</span>
                </button>
            </template>
            <template v-slot:options>
                <div class="p-3 flex items-center gap-4 hover:bg-asmooky-100">
                    <Icon size="1.1rem" name="material-symbols:account-circle-full" />
                    <span>حسابي</span>
                </div>
                <div class="p-3 flex gap-4 hover:bg-asmooky-100">
                    <Icon size="1.1rem" name="ic:outline-settings" />
                    <span>الإعدادات</span>
                </div>
                <div class="p-3 flex gap-4 hover:bg-asmooky-100">
                    <Icon size="1.1rem" name="ic:outline-settings-bluetooth" />
                    <span>شيء ما</span>
                </div>
                <div class="p-3 flex gap-4 hover:bg-asmooky-100">
                    <Icon size="1.1rem" name="ic:twotone-log-out" />
                    <span>الخروج</span>
                </div>
            </template>
        </UiAdminSelect>

    </div>
</template>