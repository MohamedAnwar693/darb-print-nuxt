<template>
    <div class="flex flex-wrap gap-2 text-xs lg:text-base whitespace-nowrap">
        <UiAdminActionButton>
            <template #content>
                <span class="hidden lg:inline-flex">ترتيب يدوي</span>
                <Icon name="carbon:chevron-sort" size="1.1rem" />
            </template>
        </UiAdminActionButton>

        <div class="flex items-center bg-agray-200 flex-1">
            <UiAdminSelect>
                <template v-slot:selected-option>
                    <span>تصفية السلات</span>
                </template>
                <template v-slot:options>
                </template>
            </UiAdminSelect>
            <UiAdminInput class="flex-1" placeholder="ابحث باسم العميل أو رقم الهاتف أو البريد الإلكتروني" />
        </div>
    </div>
</template>