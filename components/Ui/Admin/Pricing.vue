<template>
    <div>
        <div class="grid grid-cols-2 p-4 lg:w-1/3 mx-auto">
            <button 
            v-for="unit in basis" 
            @click="activeBasis = unit.key"
            :class="unit.key == activeBasis ? 'bg-aprimary-600 text-white' : 'bg-agray-200 text-black'"
            class="font-bold p-2 lg:p-3">
                {{ unit.label }}
            </button>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 p-4">
            
            <div class="bg-agray-200 py-14 px-6 flex flex-col gap-4" v-for="plan in plans.slice(0, props.plans || plans.length)">
                <div class="flex items-center gap-2">
                    <span class="text-aprimary-600 text-2xl font-extrabold">{{ plan.label }}</span>
                </div>
                <div class="flex items center my-4 font-bold gap-1 text-aprimary-300">
                    <span class="text-2xl">{{ plan.cost[activeBasis] }}</span>
                    <span v-if="activeBasis == 'month'"> / شهرياً لمدة عام </span>
                    <span v-if="activeBasis == 'year'"> / سنوياًَ </span>
                </div>
                <p class="px-4 font-bold">
                    {{ plan.description }}
                </p>
                <div :class="['flex flex-col gap-4 my-4']">
                    <div class="flex items-center gap-2" v-for="feature in plan.features">
                        <Icon class="text-yellow-500" size="1.2rem" name="ic:sharp-star" />
                        <span>{{ feature }}</span>
                    </div>
                </div>
                <button :class="['hover:bg-aprimary-600 hover:text-white border-2 border-aprimary-600 text-aprimary-600']" 
                class="font-bold w-full mt-auto p-3">
                   تجربة مجانيه 14 يوم 
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
const activeBasis = ref('month')
const props = defineProps(['plans']) // this is only for designing purposes, you may remove it in production build
const basis = [
   {
        label: 'الاشتراك السنوي',
        key: 'year'
    },
    {
        label: 'الاشتراك الشهري',
        key: 'month'
    }
]
const plans = [
    {
        label: 'الباقة الأساسية',
        description: `واجهة التطبيق الرئيسية تكون عبارة عن (عرض
جميع المنتجات بشكل مباشر) ولا تعرض بنرات أو صور
مخصصة وغيرها`,
        cost: {
            month: '2945.15 ريال',
            quarter: '810 ريال',
            year: '2945.15 ريال'
        },
        features:[
           "يدعم اللغتين (عربي / انجليزي)",
           "تطبيق على منصتي iOS و Android",
           "خاصية المفضلة للمنتجات",
           "إرسال إشعارات وتنبيهات للمستخدمين",
           "تفعيل خصم خاص لمستخدمي التطبيق",
        ]
    },
    {
        label: 'الباقة الاحترافية',
        description: `تخصيص واجهة التطبيق الرئيسية لتكون مماثلة
للمتجر الويب من بنرات وأقسام وصور وآراء عملاء`,
        cost: {
            month: '3956.00 ريال',
            quarter: '2750 ريال',
            year: '3956.00 ريال'
        },
        features:[
           "تخصيص واجهة التطبيق الرئيسية",
           "يدعم اللغتين (عربي / انجليزي)",
           "تطبيق على منصتي iOS و Android",
           "إشعارات وتنبيهات للسلات المتروكة",
           "إشعارات دعائية",
           "خاصية المفضلة بالتطبيق",
           "تفعيل خصم خاص لمستخدمي التطبيق",
        ]
    },
    {
        label: 'الباقة الأساسية',
        description: `واجهة التطبيق الرئيسية تكون عبارة عن (عرض
جميع المنتجات بشكل مباشر) ولا تعرض بنرات أو صور
مخصصة وغيرها`,
        cost: {
            month: '2945.15 ريال',
            quarter: '7000 ريال',
            year: '2945.15 ريال'
        },
        features:[
           "يدعم اللغتين (عربي / انجليزي)",
           "تطبيق على منصتي iOS و Android",
           "خاصية المفضلة للمنتجات",
           "إرسال إشعارات وتنبيهات للمستخدمين",
           "تفعيل خصم خاص لمستخدمي التطبيق",
        ]
    }
]
</script>