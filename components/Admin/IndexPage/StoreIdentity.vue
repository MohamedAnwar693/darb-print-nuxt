<template>
    <AdminIndexPageSection>
        <template v-slot:title>
            هوية المتجر 
        </template>
        <template v-slot:sub-title>
            صف نشاط متجرك لعملائك
        </template>
        <template v-slot:content>
            <label class="flex flex-col gap-2">
                <span class="font-bold text-lg">من أي دولة تمارس نشاطك التجاري ؟</span>
                <UiAdminSelect>
                    <template v-slot:selected-option>
                        <span>اختر الدولة من القائمة</span>
                    </template>
                    <template v-slot:options>
                        <div class="p-4 flex gap-4 hover:bg-asmooky-100" v-for="country in countries">
                            <Icon :name="country.flag" size="2rem" />
                            <span>{{ country.label }}</span>
                        </div>
                    </template>
                </UiAdminSelect>
            </label>

            <label class="flex flex-col gap-2">
                <span class="font-bold text-lg">ما هو مجال نشاطك التجاري؟</span>
                <UiAdminSelect>
                    <template v-slot:selected-option>
                        <span>اختر النشاط الأقرب  من القائمة </span>
                    </template>
                    <template v-slot:options>
                        <div class="p-4 flex gap-4 hover:bg-asmooky-100" v-for="activity in activities">
                            <span>{{ activity.label }}</span>
                        </div>
                    </template>
                </UiAdminSelect>
            </label>

            <label class="flex flex-col gap-2">
                <span class="font-bold text-lg">اضف الشعار (اختيارى)</span>
                <UiAdminFileUploader>
                    <template v-slot:text>
                        <p>
                            اسحب الشعار هنا او 
                            <span class="font-bold">اختاره من الجهاز</span>
                        </p>
                    </template>
                </UiAdminFileUploader>
            </label>

            <label class="flex flex-col gap-2">
                <span class="font-bold text-lg">وصف النشاط  (اختيارى)</span>
                <UiAdminTextarea placeholder="متخصصون فى بيع مستلزمات القهوة" class="border-2 border-asmooky-200"/>
            </label>
        </template>
    </AdminIndexPageSection>
</template>

<script setup>
const countries = [
    {
        label: 'الجزائر',
        flag: 'twemoji:flag-algeria',
    },
    {
        label: 'الإمارات العربية المتحدة',
        flag: 'twemoji:flag-united-arab-emirates',
    },
    {
        label: 'مصر',
        flag: 'twemoji:flag-egypt',
    },
    {
        label: 'ألمانيا',
        flag: 'twemoji:flag-germany',
    },
    {
        label: 'الهند',
        flag: 'twemoji:flag-india',
    }
]
const activities = [
    {
        label: 'صناعات محلية'
    },
    {
        label: 'عطور',
    },
    {
        label: 'ملابس',
    },
    {
        label: 'أحذية',
    },
    {
        label: 'آخر',
    }
]
</script>