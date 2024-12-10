<template>
    <div class="flex flex-wrap items-stretch gap-2 text-sm lg:text-base whitespace-nowrap">
        <UiAdminActionButton>
            <template #content>
                <span class="hidden lg:inline">
                    ترتيب يدوي
                </span>
                <Icon name="carbon:chevron-sort" size="1.1rem" />
            </template>
        </UiAdminActionButton>

        <div class="flex items-center bg-agray-200 flex-1">
            <UiAdminSelect custom-classes="p-0">
                <template v-slot:selected-option>
                    <span>تصفية المنتجات</span>
                </template>
                <template v-slot:options>
                </template>
            </UiAdminSelect>
            <UiAdminInput class="flex-1" placeholder="ابحث باسم المنتج أو رمز المنتج" />
        </div>
    </div>
</template>