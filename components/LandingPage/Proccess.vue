<template>
    <div class="container py-16 mx-auto">
        <div class="text-center flex flex-col gap-4">
            <span class="text-primary-800 font-bold">آلية العمل</span>
            <h2 class="title">أفضل قيمة مقابل السعر</h2>
            <span class="text-rosy-800 font-bold">فقط أخبرنا ما هو طلبك ، ونحن نتكفل بالمهمة</span>
        </div>

        <div class="grid p-4 lg:p-0 lg:grid-cols-2 gap-8 my-12">
            <div class="bg-primary-300 text-white p-4 lg:p-12">
                <div class="flex gap-4 items-center">
                    <h3 class="text-2xl lg:text-4xl font-bold">طريقة دَرْب برنت</h3>
                    <img src="~/assets/stars.png" class="w-16" alt="">
                </div>
                <ul class="flex flex-col gap-4 mt-8">
                    <li v-for="step in darbSteps" class="flex gap-2 lg:text-lg items-center">
                        <img src="~/assets/stars.png" class="w-6" alt="" />
                        <span v-html="step"></span>
                    </li>
                </ul>
                <a href="#services" class="text-sm lg:text-base group py-2 lg:py-4 mt-8 w-full lg:w-5/6 lg:mr-8 ml-auto px-4 text-center bg-smooky-800 flex gap-2 place-content-center items-center">
                    <span>ابدأ الآن</span>
                    <fa-icon class="group-hover:-translate-x-2" :icon="['fas', 'arrow-left']" />
                </a>
            </div>
            <div class="bg-smooky-50 p-4 lg:p-12">
                <div class="flex gap-4 items-center">
                    <h3 class="text-2xl lg:text-4xl font-bold">الطريقة القديمة</h3>
                </div>
                <ul class="flex flex-col gap-4 mt-8">
                    <li v-for="step in oldSteps" class="flex gap-2 lg:text-lg items-center">
                        <span v-html="step"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
const darbSteps = [
    'حدد <b>منتجاتك</b> .',
    'تلقي <b>تصميمات مجانية</b> مع <b>عرض أسعار</b>  ',
    'بعد <b>الموافقة</b> ، ننتج كل <b>طلباتك</b> .',
    'بعد الإنتاج نقوم <b>بتعبئة وتخزين البضائع</b> الخاصة بك .',
    'اشحن سلعك إلى <b>جميع أنحاء دول العالم</b> في عبوات مجمعة أو فردية .'
]

const oldSteps = [
    '> البحث كثيراً عن الموردين .',
    ' > عدم ضمان الجودة .',
    '> تكاليف إضافية للتصميم .',
    '> لا يقدم حلول الشحن والتخزين .',
    '> عدم تنوع طرق الدفع .'
]
</script>