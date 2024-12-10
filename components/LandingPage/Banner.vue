<template>
    <div class="w-full grid lg:grid-cols-5 gap-4 px-4 lg:px-0">
        <!-- right content ////// -->
        <div class="lg:h-auto lg:m-auto lg:col-span-3 ml-1 flex flex-col gap-8 py-5 lg:px-5">
            <h1 class="text-3xl lg:text-4xl text-primary-800 font-superbold leading-normal">الطباعة حسب الطلب <br>ببساطة</h1>
            <div class="lg:pr-8 grid lg:grid-cols-3 gap-6 text-primary-800 whitespace-nowrap">
                <div v-for="(feature, index) in features" 
                v-bind:key="index" 
                class="flex items-center gap-3 text-lg lg:text-lg font-black">
                    <client-only>
                        <fa-icon :icon="['fas', 'check']" />
                    </client-only>
                    <span>{{ feature  }}</span>
                </div>
            </div>

            <div class="flex gap-6">
                <NuxtLink to="/gift-box" class="text-lg font-bold whitespace-nowrap group p-2 lg:p-3 lg:w-48 text-center border-2 border-primary-800 bg-primary-800 text-white flex gap-2 place-content-center items-center">
                    <span>بناء صندوق الهدايا</span>
                    <fa-icon class="group-hover:-translate-x-2" :icon="['fas', 'arrow-left']" />
                </NuxtLink>
                <a href="#contact-us" class="text-primary-800 border-primary-800 text-lg font-bold whitespace-nowrap p-2 lg:p-3 lg:w-48 text-center border-2 hover:bg-primary-800 hover:text-white flex gap-2 place-content-center items-center">
                    <span>تواصل معنا</span>
                    <fa-icon :icon="['fas', 'phone']" />
                </a>
            </div>
        </div>

        <!-- left content ///////// -->
        <div class="hidden lg:grid lg:col-span-2 grid-cols-2 gap-3 overflow-hidden h-[70vh]">
            <div v-for="(sample, i) in samples" 
            v-bind:key="i" 
            :class="i % 2 === 0 ? 'move-to-top' : 'move-to-bottom'"
            class="bg-smooky-100 rounded-xl relative p-8 pt-16 pl-0">
                <div class="absolute right-1 top-1 flex flex-col p-4">
                    <span class="font-bold text-lg">{{ sample.title }}</span>
                    <span class="text-sm">{{ sample.subTitle }}</span>
                </div>
                <img :src="sample.img" class="w-4/5 mr-auto" alt="" />
            </div>
        </div>
    </div>
</template>

<style>
.move-to-top{
    animation: 8s moveToTop alternate infinite;
}
.move-to-bottom{
    animation: 8s moveToBottom alternate infinite;
}
@keyframes moveToTop {
    0%{
        transform: translateY(-200px);
    } 
    100%{
        transform: translateY(0px);
    }
}
@keyframes moveToBottom {
    0%{
        transform: translateY(0px);
    } 
    100%{
        transform: translateY(-200px);
    }
}
</style>

<script setup>
import sample4 from '~/assets/images/sample-4.png'
import sample3 from '~/assets/images/sample-3.png'
import sample2 from '~/assets/images/sample-2.png'
import sample1 from '~/assets/images/sample-1.png'

const features = [
    'أفضل جودة',
    'خدمات التخزين والشحن',
    ' أفكار مبتكرة',
    'من دون حد أدنى',
    'التصميم مجاني'
]

const samples = [
    {
        title: 'بوكسات التعبئة والتغليف',
        subTitle: 'دَرْب برنت',
        img: sample1
    },
    {
        title: 'تي شيرت',
        subTitle: 'دَرْب برنت',
        img: sample2,
    },
    {
        title: 'طباعة كوب',
        subTitle: 'دَرْب برنت',
        img: sample3,
    },
    {
        title: 'كروت شخصية',
        subTitle: 'دَرْب برنت',
        img: sample4,
    },
    {
        title: 'بوكسات التعبئة والتغليف',
        subTitle: 'دَرْب برنت',
        img: sample1
    },
    {
        title: 'تي شيرت',
        subTitle: 'دَرْب برنت',
        img: sample2,
    },
    {
        title: 'طباعة كوب',
        subTitle: 'دَرْب برنت',
        img: sample3,
    },
    {
        title: 'كروت شخصية',
        subTitle: 'دَرْب برنت',
        img: sample4,
    },
]
</script>

