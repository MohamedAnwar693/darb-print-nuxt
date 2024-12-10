<template>
    <div class="container  mx-auto px-4 lg:px-0 py-16" id="contact-us">
        <LandingPagePartialsSectionHeader subTitle="اختر الأنسب لك" upperTitle="تواصل معنا" iconless="true" linkless="true" title="يمكنك الطلب والاستفسار على اي من قنواتنا التالية"/>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
            <div v-for="manner in contactManners" class="cursor-pointer hover:shadow bg-smooky-50 hover:bg-primary-300 hover:text-white group py-8 px-4 flex flex-col h-72 justify-between">
                <span class="bg-rosy-800 group-hover:bg-white group-hover:text-rosy-800 rounded-lg w-12 h-12 flex text-white">
                    <client-only>
                        <fa-icon class="m-auto" :icon="manner.icon" />
                    </client-only>
                </span>

                <h2 class="font-bold text-lg">
                    {{ manner.title }}
                </h2>

                <a target="_blank" :href="manner.link" class="text-primary-800 group-hover:text-white font-bold text-sm flex items-center gap-4">
                    <span>{{ manner.info }}</span>
                    <span class="hidden group-hover:block">
                        <client-only>
                            <fa-icon :icon="['fas', 'arrow-left']" />
                        </client-only>
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const contactManners = [
    {
        icon: ['fab', 'whatsapp'],
        title: 'واتس آب',
        info: '+966505502047',
        link: 'https://wa.me/966505502047'
    },
    {
        icon: ['far', 'envelope'],
        title: 'البريد الإلكتروني',
        info: 'Ahlan@darbprint.com' ,
        link: 'mailto:Ahlan@darbprint.com'
    },
    {
        icon: ['fas', 'phone'],
        title: 'إتصال',
        info: '966505502047',
        info: 'tel:966505502047' 
    },
    {
        icon: ['fas', 'message'],
        title: 'اترك معلومات التواصل',
        info: 'اضغط هنا',
        link: '/company-sales'
    }
]
</script>