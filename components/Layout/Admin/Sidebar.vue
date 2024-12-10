<template>
    <div class="bg-agray-100 overflow-y-auto relative">
        <button @click="$emit('toggleSidebar')" class="block lg:hidden absolute top-2 left-2 text-red-600">
            <Icon name="mdi:close" size="1.5rem" />
        </button>

        <div class="flex flex-col py-8">
            <div class="flex flex-col gap-2 mx-auto text-center">
                <img src="~/assets/images/darb-logo.png" class="rounded-full w-24 mx-auto" alt="">
                <span class="text-lg font-extrabold">Darb Print</span>
                <span class="text-xs text-agray-300">زيارة المتجر</span>
                <span class="text-sm">الرقم المميز : 1001</span>
            </div>

            <hr class="my-5 w-2/3 mr-6">

            <div class="flex flex-col my-6 pr-6 text-agray-300">
                <ul class="my-5">
                    <LayoutAdminNavLink @click="link.link && $emit('toggleSidebar')" v-for="link in links" :link="link" />
                </ul>
            </div>

            <div class="flex flex-col my-6 pr-6 text-agray-300">
                <span class="text-aprimary-600">
                    منتجات وخدمات روّاد 
                </span>
                <ul class="my-5">
                    <LayoutAdminNavLink @click="link.link && $emit('toggleSidebar')" v-for="link in rouadServices" :link="link" />
                </ul>
            </div>

            <div class="flex flex-col my-6 pr-6 text-agray-300">
                <span class="text-aprimary-600">
                    المساعدة والدعم الفني
                </span>
                <ul class="my-5">
                    <LayoutAdminNavLink @click="link.link && $emit('toggleSidebar')" v-for="link in supportLinks" :link="link" />
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
const links = [
    {
        icon: 'heroicons:home',
        label: 'دليل البداية',
        link: '/admin',
    },
    {
        icon: 'uit:chart-pie',
        label: 'التحليلات',
        link: '/admin/analytics',
    },
    {
        icon: 'heroicons:shopping-cart',
        label: 'الطلبات',
        link: '/admin/orders',
    },
    {
        icon: 'humbleicons:basket',
        label: 'المنتجات',
        link: '/admin/products',
    },
    {
        icon: 'ph:speaker-simple-high-light',
        label: 'التسويق',
        link: false, 
        nested: [
            {
                label: 'السلات المتروكة',
                link: '/admin/marketing/abandoned-carts',
                icon: 'ic:outline-remove-shopping-cart',
            },
            {
                label: 'قسائم التخفيض',
                link: '/admin/marketing/coupons',
                icon: 'ri:coupon-4-line',
            }
        ]
    },
    {
        icon: 'icon-park-outline:peoples',
        label: 'العملاء',
        link: '/admin/clients',
    },
    {
        icon: 'solar:pallete-2-outline',
        label: 'تصميم المتجر',
        link: '/admin/store-design',
    },
    {
        icon: 'ph:gear',
        label: 'الإعدادات',
        link: '/admin/settings',
    },
]
const rouadServices = [
    {
        label: 'سوق التطبيقات',
        icon: 'healthicons:market-stall-outline',
        link: '/admin/applications-marketplace',
    },
    {
        label: 'سوق الخدمات',
        icon: 'solar:bag-4-linear',
        link: '/admin/services-marketplace',
    },
    {
        label: 'تطبيقات الجوال',
        icon: 'teenyicons:bug-outline',
        link: '/admin/mobile-applications',
    }
]
const supportLinks = [
    {
        label: 'مركز المساعدة',
        icon: 'material-symbols:help-outline-rounded',
    },
    {
        label: 'تواصل مع الدعم',
        icon: 'streamline:interface-help-customer-support-1-customer-headset-help-microphone-phone-support',
    },
    {
        label: 'طلب ميزة',
        icon: 'ph:star-thin',
    }
]
</script>