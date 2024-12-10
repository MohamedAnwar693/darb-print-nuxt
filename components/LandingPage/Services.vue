<template>
    <div class="container py-16 mx-auto p-4 lg:p-0" id="services">
        <div class="text-center flex flex-col gap-4">
            <h2 class="title">ما الذي ترغب بطباعته اليوم ؟</h2>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 mt-8">
            <div v-for="service in services" class="flex flex-col gap-5 lg:my-4">
                <div class="bg-smooky-50 p-4 group">
                    <img class="animate__animated animate__fadeIn block group-hover:hidden h-32 lg:h-64 mx-auto" :src="service.image" alt="" />
                    <img class="animate__animated animate__fadeIn hidden group-hover:block h-32 lg:h-64 mx-auto" :src="service.colored_image" alt="" />
                </div>
                <button class="group flex items-center gap-2 font-bold text-lg">
                    <span>{{ service.title }}</span>
                    <fa-icon class="group-hover:-translate-x-2 translate-y-[1px]" :icon="['fas', 'arrow-left']" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import service1 from '~/assets/images/service-1.png'
import service2 from '~/assets/images/service-2.png'
import service3 from '~/assets/images/service-3.png'
import service4 from '~/assets/images/service-4.png'
import service5 from '~/assets/images/service-5.png'
import service6 from '~/assets/images/service-6.png'
import service7 from '~/assets/images/service-7.png'
import service8 from '~/assets/images/service-8.png'
import service1colored from '~/assets/images/service-1-colored.png'
import service2colored from '~/assets/images/service-2-colored.png'
import service3colored from '~/assets/images/service-3-colored.png'
import service4colored from '~/assets/images/service-4-colored.png'
import service5colored from '~/assets/images/service-5-colored.png'
import service6colored from '~/assets/images/service-6-colored.png'
import service7colored from '~/assets/images/service-7-colored.png'
import service8colored from '~/assets/images/service-8-colored.png'

const services = [
    {
        title: 'كروت شخصية',
        image: service1,
        colored_image: service1colored
    },
    {
        title: 'هدايا الدعائية',
        image: service2,
        colored_image: service2colored
    },
    {
        title: 'مطبوعات ورقية',
        image: service3,
        colored_image: service3colored
    },
    {
        title: 'التغليف والتعبئة',
        image: service4,
        colored_image: service4colored
    },
    {
        title: 'طباعة كبيرة الحجم',
        image: service5,
        colored_image: service5colored
    },
    {
        title: 'طباعة الكانفاس',
        image: service6,
        colored_image: service6colored
    },
    {
        title: 'معارض و مؤتمرات',
        image: service7,
        colored_image: service7colored
    },
    {
        title: 'عروضات دَرْب',
        image: service8,
        colored_image: service8colored
    },
]
</script>