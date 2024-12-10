<template>
    <div>
        <LayoutAdminPageHeader title="التطبيقات" />
        <div class="bg-white my-8 flex flex-col gap-8 px-8 py-10">
            <h2 class="font-bold text-lg text-aprimary-600">
                نظرة عامة :
            </h2>
            <p>
                لتطوير متجركم  إلى تطبيق 
                iOS
                و 
                Android
            </p>
            <h3 class="font-bold">
                لماذا يهمك تطبيق الجوال لمتجرك
            </h3>
            <ul class="list-disc px-8">
                <li>
                    أنت تستحق أن تمتلك علامة تجارية احترافية وتقدم لعملائك تطبيق احترافي لمتجرك.
                </li>
                <li>
                    .Android وقوقل بلاي iOS تعزيز العلامة التجارية الخاصة بمشروعك وذلك بتواجدك على متجر ابل 
                </li>
            </ul>

            <h3 class="font-bold">
               أبزر المميزات
            </h3>
            <ul class="list-disc px-8">
                <li v-for="feature in features" v-text="feature"></li>
            </ul>

            <h3 class="font-bold">
                أمثلة على الباقة الاحترافية
            </h3>
            <ul class="list-disc px-8">
                <li v-for="example in proPackageExamples" class="font-bold">
                    {{ example.label }}
                    <ul>
                        <li class="text-aprimary-600">IOS</li>
                        <li class="text-aprimary-600">Android</li>
                    </ul>
                </li>
            </ul>

            <h3 class="font-bold">
                أمثلة على الباقة الأساسية
            </h3>
            <ul class="list-disc px-8">
                <li v-for="example in mainPackageExamples" class="font-bold">
                    {{ example.label }}
                    <ul>
                        <li class="text-aprimary-600">IOS</li>
                        <li class="text-aprimary-600">Android</li>
                    </ul>
                </li>
            </ul>

            <h3 class="font-bold">
                آلية العمل
            </h3>
            <ol class="list-decimal px-8">
                <li v-for="step in proccessSteps" v-text="step"></li>
            </ol>

            <h3 class="font-bold">
                ملاحظة مهمة:
            </h3>
            <ul class="list-disc px-8">
                <li v-for="note in notes" v-text="note"></li>
            </ul>
        </div>

        <div class="bg-white p-8">
            <LayoutAdminPageHeader title="الأسعار والخطط" sub-title="اشترك الآن وطور تجارتك مع مزايا التطبيق المتنوعة" />
            <UiAdminPricing plans="3"/>
        </div>
    </div>
</template>
<script setup>
definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - تطبيقات الجوال',})

const features = [
    "دعم مستمر بالتحديثات للتطبيق.",
    "تصميم التطبيق بهويتك الخاصة وبشكل فريد.",
    "تجربة مستخدم وتصميم جميل لمتجرك الإلكتروني.",
    "سرعة الطلب من المتجر بواسطة التطبيق.",
    "إرسال إشعارات وتنبيهات للسلات المتروكة بالتطبيق.",
    "إرسال إشعارات إعلانية لمستخدمي التطبيق لرفع معدل التحويل للمتجر.",
    "إدارة واحدة للتطبيق والمتجر من لوحة التحكم",
    "دمج بوابات الدفع بالتطبيق.",
    "Apple Pay الدفع بواسطة",
    "الخصومات الخاصة بمستخدمي تطبيق الجوال.",
]

const proPackageExamples = [
    {
        label: "تطبيق رسيل",
        ios: '/',
        android: '/',
    },
    {
        label: "فيصل الدايل",
        ios: '/',
        android: '/',
    },
    {
        label: "تطبيق ريفي",
        ios: '/',
        android: '/',
    },
    {
        label: "تطبيق عبايات حوراء",
        ios: '/',
        android: '/',
    }
]

const mainPackageExamples = [
    {
        label: "تطبيق حقائب المسافر",
        ios: '/',
        android: '/',
    },
    {
        label: "تطبيق فوح",
        ios: '/',
        android: '/',
    }
]

const proccessSteps = [
    "اشترك بالباقة المناسبة لك.",
    "قم بتفعيل التطبيق واملأ النموذج الخاص ببيانات التواصل.",
    "سيتم التواصل معك من قِبل فريق عناقيد التطبيقات لاستلام المتطلبات للبدء بالعمل.",
    "سوف تستلم نسخة تجريبية للتطبيق قبل رفعه للمتجر.",
    "بعد الاعتماد سيتم رفعه على حساب المطورين الخاص بكم.",
]

const notes = [
    "يلتزم التاجر بإنشاء حساب مطورين في متاجر التطبيقات ابل / قوقل وتزويدنا بالبيانات الخاصة بالحساب، لنتمكن من رفع تطبيق التاجر على متجر التطبيقات، وفي حال عدم توفر حساب مطورين ستقوم عناقيد التطبيقات برفع التطبيق على أحد الحسابات الشخصية الفرعية التابعة لعناقيد التطبيقات مجانًا.",
    "تلتزم عناقيد التطبيقات بنقل التطبيق لحساب المطورين الخاص بالتاجر بعد إنشاءه في أي وقت مجانًا."
]
</script>