<template>
    <div class="flex-1">
        <div class="w-full px-4 xl:px-16">
            <GiftBoxPageHeader />

            <div class="grid lg:grid-cols-12 gap-4">
                <!-- right column - sidebar ////// -->
                <GiftBoxPageSidebar class="lg:sticky lg:top-5 lg:h-[60vh] lg:col-span-2" />

                <!-- middle column - products grid //////// -->
                <div class="lg:col-span-7 flex flex-col gap-4">
                    <div class="flex flex-col lg:flex-row lg:items-center lg:h-8">
                        <span class="title">التعبئة والتغليف</span>
                        <div class="mr-auto flex items-center gap-2 text-sm lg:text-base">
                            <span class="font-bold">ترتيب حسب:</span>
                            <UiSelect class="text-smooky-300 p-2" dropdownClasses="w-full">
                                <template v-slot:selected-option>
                                    المميز
                                </template>
                                <template v-slot:options>
                                    <div class="flex items-center cursor-pointer bg-primary-800 text-white p-2 hover:bg-primary-800 hover:text-white">
                                        المميز
                                        <fa-icon class="mr-auto" :icon="['fas', 'check']" />
                                    </div>
                                    <div class="flex items-center cursor-pointer bg-white p-2 hover:bg-primary-800 hover:text-white">المميز</div>
                                </template>
                            </UiSelect>
                            <div class="text-smooky-300 bg-smooky-100 rounded-full flex">
                                <input placeholder="أدخل كلمة البحث .." v-show="showSearchBar" type="text" class="bg-smooky-100 rounded-full focus:outline-none px-4">
                                <span @click="showSearchBar = !showSearchBar" class="w-8 h-8 flex cursor-pointer">
                                    <fa-icon class="m-auto" :icon="['fas', 'magnifying-glass']" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        <LandingPagePartialsProductItem buttonText="أضف للصندوق" :item="item" v-for="item in items" />
                    </div>
                </div>

                <!-- left column - gifted packages //////// -->
                <div class="lg:sticky lg:top-5 lg:h-[60vh] lg:col-span-3 flex flex-col gap-5 lg:gap-32">
                    <div class="flex flex-col gap-4">
                        <span class="text-lg lg:text-2xl font-bold">معلومات الطلب</span>
                        <GiftBoxPageGiftedPackage v-for="(item, index) in items.slice(0, 3)" :item="item" :colorless="index == 0" />
                    </div>

                    <div class="bg-smooky-50 p-4 flex flex-col gap-4 mt-16 lg:mt-0 text-sm xl:text-base">
                        <span class="border bg-white p-2 flex gap-4 items-center">
                            <span>200 ر.س</span>
                            X 
                            <span>100 عبوة</span>
                            <span class="mr-auto font-bold">20,000 ر.س</span>
                            <fa-icon :icon="['fas', 'angle-down']" />
                        </span>

                        <NuxtLink to="/gift-box/order">
                            <UiSolidButton class="w-full">
                                <template v-slot:content>
                                    <span class="text-base p-2">
                                        طلب عرض أسعار
                                    </span>
                                </template>
                            </UiSolidButton>
                        </NuxtLink>

                        <span class="text-sm m-auto">
                            لا يتطلب منك الدفع سنقوم بمراجعه طلب والتأكد من 
                            كافه التفاصيل الفنيه والتواصل معك لاتمام الطلب  
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import prcard5 from '~/assets/images/prcard-5.png'
import prcard1 from '~/assets/images/prcard-1.png'
import product2 from '~/assets/images/product-2.png'
import pcard5 from '~/assets/images/prcard-5.png'
export default {
    setup(){
        useHead({
            title: 'بناء صندوق الهدايا'
        })
    },
    data(){
        return {
            showSearchBar: false,
            items:[
                {
                    title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
                    price: '200 ر.س',
                    image: prcard1,
                },
                {
                    title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
                    price: '200 ر.س',
                    image: prcard5,
                },
                {
                    title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
                    price: '200 ر.س',
                    image: product2,
                },
                {
                    title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
                    price: '200 ر.س',
                    image: product2,
                },
                {
                    title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
                    price: '200 ر.س',
                    image: pcard5,
                },
                {
                    title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
                    price: '200 ر.س',
                    image: pcard5,
                },
                {
                    title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
                    price: '200 ر.س',
                    image: prcard1,
                },
                {
                    title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
                    price: '200 ر.س',
                    image: prcard5,
                },
                {
                    title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
                    price: '200 ر.س',
                    image: product2,
                },
                {
                    title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
                    price: '200 ر.س',
                    image: product2,
                },
                {
                    title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
                    price: '200 ر.س',
                    image: pcard5,
                },
                {
                    title: 'زجاجة كلاسيكية 500 مل من الفولاذ',
                    price: '200 ر.س',
                    image: pcard5,
                }
            ]
        }
    }
}
</script>