<template>
    <LayoutAdminPageHeader title="إعدادات الإشعارات"></LayoutAdminPageHeader>
    <div class="card-style-color p-4 text-agray-300  mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
        <div class="bg-white p-8 text-agray-300 mb-2 mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
            <!-- <div class="grid lg:grid-cols-3 gap-12 px-8">
                <div>
                    <span class="text-xl lg:text-3xl font-bold mt-4">اسم المتجر</span>
                    <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 mt-4 w-80 border-b border-agray-400"></div>
                </div>
                <div>
                    <span class="text-xl lg:text-3xl font-bold mt-4 mr-8">اشعارات التطبيق</span>
                    <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 mt-4 w-52 mr-8 border-b border-agray-400"></div>
                </div>
                <div>
                    <span class="text-xl lg:text-3xl font-bold mt-4 mr-36">البريد الالكتروني</span>
                    <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 mt-4 w-52 mr-32 border-b border-agray-400"></div>
                </div>
            </div> -->
            <div class="grid lg:grid-cols-2 gap-4">
                <div class="flex flex-col gap-4 px-5">
                    <span class="text-xl lg:text-3xl font-bold mt-4 mr-auto ml-4">اشعارات التطبيق</span>
                    <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 w-48 ml-4 mr-auto border-b border-agray-400"></div>
                    <div v-for="notification in app_notifications" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg font-bold">{{ notification.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="notification.active" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <span class="text-xl lg:text-3xl font-bold mt-4 mr-auto ml-32">البريد الالكتروني</span>
                    <div class="flex overflow-x-auto items-center lg:gap-2 xl:gap-4 ml-32 w-48 mr-auto border-b border-agray-400"></div>
                    <div  v-for="email in email_notifications" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg font-bold">{{ email.name }}</span>
                        </p>
                        <div v-if="email.isVisible" class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5 ml-40">
                            <UiAdminToggler :active="email.active" />
                        </div>
                        <div v-if="email.isVisible === false" class="mr-auto p-5 ml-40 mt-6"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الإعدادات',})

const app_notifications = [
    {
        name: 'طلبات جديدة',
        active: true,
    },
    {
        name: 'إضافة منتج للسلة',
        active: false,
    },
    {
        name: 'تقييم المتجر',
        active: false,
    },
    {
        name: 'تقييم المنتجات',
        active: false,
    },
    {
        name: 'تقييم شركة الشحن',
        active: false,
    },
    {
        name: 'إرسال سؤال من عميل',
        active: false,
    },
    {
        name: 'تفعيل حسابات موظفي المتجر',
        active: false,
    },
    {
        name: 'المدفوعات الإلكترونية',
        active: false,
    },
    {
        name: 'تنبيه قرب إنتهاء كمية منتج',
        active: true,
    }
]

const email_notifications = [
    {
        name: null,
        active: false,
        isVisible: true,
    },
    {
        name: null,
        active: true,
        isVisible: false,
    },
    {
        name: null,
        active: true,
        isVisible: true,
    },
    {
        name: null,
        active: true,
        isVisible: true,
    },
    {
        name: null,
        active: true,
        isVisible: true,
    },
    {
        name: null,
        active: true,
        isVisible: true,
    },
    {
        name: null,
        active: true,
        isVisible: true,
    },
    {
        name: null,
        active: true,
        isVisible: true,
    },
    {
        name: null,
        active: true,
        isVisible: true,
    }
]

</script>

<style scoped>
.card-style-color{
    background: #DFE5EF;
}
</style>
