<template>
    <div class="text-agray-300">
        <LayoutAdminPageHeader class="p-4" title="الإعدادات" sub-title="لوحة الإعدادات" />
        
        <div class="flex flex-col gap-4 my-8">
            <div class="bg-white p-8" v-for="(section, index) in sections">
                <span class="font-bold">
                    {{ section.label }}
                </span>

                <div :class="[index == 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-3', 'grid gap-8 my-20']">
                    <NuxtLink :to="link.link" :class="index == 0 ? 'border' : 'border-transparent'" class="hover:bg-agray-200 border p-4 lg:p-8 flex items-center gap-4" v-for="link in section.links">
                        <span class="text-aprimary-600">
                            <Icon :name="link.icon" size="2.2rem" />
                        </span>
                        <div class="flex flex-col gap-2">
                            <span class="font-bold">
                                {{ link.label }}
                            </span>
                            <span>
                                {{ link.description }}
                            </span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الإعدادات',})
const sections = [
    {
        label: 'إعدادات الحساب',
        links: [
            {
                label: 'إعدادات الحساب',
                description: 'استعراض و تعديل معلومات الحساب وكلمة المرور',
                icon: 'clarity:cog-outline-badged',
                link: '/admin/setting/account',
            },
            {
                label: 'إدارة الإشتراكات',
                description: 'استعراض وإدارة اشتراكك في رواد ',
                icon: 'ci:bell-notification',
                link: '/admin/setting/subscription-management',
            }
        ]
    },
    {
        label: 'الإعدادات الأولية',
        links: [
            {
                label: 'بيانات المتجر',
                description: 'تعديل معلومات النشاط التجاري للمتجر',
                icon: 'solar:checklist-minimalistic-broken',
                link: '/admin/setting/store-data',
            },
            {
                label: 'لغة المتجر والعملات النقدية',
                description: 'التحكم في اللغة والعملات المسموح التعامل بها في المتجر',
                icon: 'tabler:square-letter-a',
                link: '/admin/setting/languages',
            },
            {
                label: 'رابط المتجر الالكتروني',
                description: 'Domainتغيير عنوان رابط متجرك ',
                icon: 'ph:globe',
                link: '/admin/setting/domain',
            },
            {
                label: 'طرق الدفع',
                description: 'إدارة الحسابات البنكية وتمكين خيارات الدفع الإضافية',
                icon: 'streamline:money-cash-bill-2-currency-billing-payment-finance-cash-bill-money-accounting',
                link: '/admin/setting/payment-methods',
            },
            {
                label: 'خيارات الشحن والتوصيل',
                description: 'إدارة خيارات الشحن والتوصيل لمتجرك',
                icon: 'bi:truck',
                link: '/admin/setting/delivery-options',
            },
        ]
    },
    {
        label: 'الإعدادات المتقدمة',
        links: [
            {
                label: 'خصائص الطلبات والمنتجات',
                description: 'تغيير عرض نتائج الطلبات والمنتجات وإظهار الكمية',
                icon: 'fluent:table-settings-28-regular',
                link: '/admin/settings',
            },
            {
                label: 'إدارة التقييمات',
                description: 'لإدارة تقييمات وآراء عملائك حول المنتجات المقدمة في متجرك',
                icon: 'streamline:travel-hotel-one-star-one-star-reviews-review-rating-hotel-star',
                link: '/admin/setting/ratings',
            },
            {
                label: 'إعدادات الفوترة',
                description: 'ربط وتفعيل قيمة الضريبة المضافة لمتجرك',
                icon: 'fa6-solid:file-invoice-dollar',
                link: '/admin/setting',
            },
            {
                label: 'إشعارات الفريق',
                description: 'التحكم في إشعارات فريق عملك بتغيير حالات الطلب',
                icon: 'solar:file-text-linear',
                link: '/admin/setting/notification',
            },
            {
                label: 'فريق العمل',
                description: 'إضافة أعضاء فريق العمل في متجرك وتعديل صلاحيات الدخول',
                icon: 'octicon:people-24',
                link: '/admin/setting/team-work',
            },
            {
                label: 'خيارات صفحة إتمام عملية الشراء',
                description: 'تحديد الخيارات التي تظهر لعملائك في صفحة إتمام عملية الشراء، مثل الشراء كزائر وتفعيل الشراء بصفحة واحدة.',
                icon: 'fluent:money-hand-20-regular',
                link: '/admin/settings',
            },
            {
                label: 'الصفحات الاضافية',
                description: 'إضافة الأسئلة الشائعة مع إجاباتها',
                icon: 'iconoir:multiple-pages-empty',
                link: '/admin/settings',
            },
            {
                label: 'العملات المتاحة',
                description: '',
                icon: 'grommet-icons:currency',
                link: '/admin/setting/available-currencies',
            },
            {
                label: 'الصيانة',
                description: '',
                icon: 'grommet-icons:host-maintenance',
                link: '/admin/setting/maintenance',
            },
            {
                label: 'إعادة تعيين كلمة المرور',
                description: '',
                icon: 'fluent:password-reset-48-filled',
                link: '/admin/setting/reset-password',
            },
            {
                label: 'الخدمات الإحصائية',
                description: '',
                icon: 'carbon:text-link-analysis',
                link: '/admin/setting/statistical-services',
            },
            {
                label: 'خيارات المتجر',
                description: '',
                icon: 'ion:options-outline',
                link: '/admin/setting/store-options',
            },
            {
                label: 'ضريبة القيمة المضافة',
                description: '',
                icon: 'tabler:tax',
                link: '/admin/setting/value-tax',
            },
            {
                label: 'الفواتير و المحفظة',
                description: '',
                icon: 'solar:wallet-bold',
                link: '/admin/setting/wallet-bills',
            },
        ]
    }
]
</script>