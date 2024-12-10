<template>
    <div class="flex-1">
        <div class="container mx-auto">
            <hr class="border-smooky-50" />
        </div>
        <div class="container mx-auto py-6 px-4 lg:px-0">
            <LayoutDefaultHistory>
                <template v-slot:links>
                    <NuxtLink to="/categories">
                        <client-only>
                            <fa-icon class="mx-2 lg:mx-4" :icon="['fas', 'angle-left']" />
                        </client-only>
                        <span>التعبئة والتغليف</span>
                    </NuxtLink>
                    <NuxtLink>
                        <client-only>
                            <fa-icon class="mx-2 lg:mx-4" :icon="['fas', 'angle-left']" />
                        </client-only>
                        <span class="text-smooky-300">صندوق شحن كامل الألوان</span>
                    </NuxtLink>
                </template>
            </LayoutDefaultHistory>

            <!-- order builder & image slider grid ///////// -->
            <div class="grid lg:grid-cols-8 my-8 gap-8">
                <div class="lg:col-span-3">
                    <ProductPageImagesSlider :product="product" />
                </div>
                <div class="lg:col-span-5 flex flex-col gap-8">
                    <div class="title">
                        <p>صندوق شحن كامل الألوان</p>
                    </div>

                    <div class="text-lg px-8">
                        <ul class="list-disc">
                            <li>تيشيرت بولو مع طباعة الشعار بلون واحد من اختيار العميل</li>
                            <li>مناسبة لطلبات الشركات أو الفعاليات</li>
                            <li>مدة التنفيذ المتوقعة: من 5 إلى 7 أيام عمل بعد اعتماد التصميم والطلب حسب الكمية</li>
                        </ul>
                    </div>

                    <ProductPageOrderBuilder class="flex flex-col gap-4"/>
                </div>
            </div>

            <!-- comments section ////////// -->
            <div class="my-16 lg:my-32 flex flex-col gap-8">
                <div>
                    <textarea placeholder="هل لديك سؤال معين .." class="w-full border-smooky-250 p-3 border" rows="5"></textarea>
                    <div class="flex items-center">
                        <button class="rounded-md hover:border-primary-800 hover:bg-transparent border-2 hover:text-primary-800 bg-primary-800 text-white flex items-center justify-center py-1 lg:py-3 px-4 lg:px-12">
                            <span class="font-bold">إرسال</span>
                        </button>
                        <span class="text-sm mr-auto">
                            سجّل ليصلك تنبيه بالرد
                        </span>
                    </div>
                </div>

                <div class="flex flex-col gap-8">
                    <ProductPageComment v-for="(comment, index) in comments" :comment="comment" :class="index !== 0 ? 'border-t border-smooky-250' : ''" />
                </div>
            </div>

            <!-- suggested products ///////// -->
            <div>
                <LandingPagePartialsSectionHeader iconless="true" title="منتجات قد تعجبك"/>
                <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
                    <LandingPagePartialsProductItem :item="item" v-for="item in suggestedItems" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import productImage from '~/assets/images/pprint-1.png'
import productImage2 from '~/assets/images/pprint-2.png'
import pprint5 from '~/assets/images/pprint-5.png'
import product5 from '~/assets/images/product-5.png'
import pcard6 from '~/assets/images/prcard-6.png'
import pcard5 from '~/assets/images/prcard-5.png'

export default {
    setup() {
        useHead({
           title: 'صفحة المنتج'
       })
    },
    // mounted(){
    //     console.log(useRoute().params.slug.split('-')[0])
    // },
    data(){
        return {
            activeIndex: 1,
            product:{
                thumbnail_image: productImage,
                other_images:[
                    productImage,
                    productImage2,
                    productImage,
                    productImage2,
                    productImage,
                    productImage2,
                    productImage,
                    productImage2,
                    productImage,
                    productImage2,
                ]
            },
            suggestedItems: [
                {
                    title: 'صندوق شحن كامل الألوان',
                    price: '200 ر.س',
                    image: product5,
                },
                {
                    title: 'صندوق شحن كامل الألوان',
                    price: '200 ر.س',
                    image: pprint5,
                },
                {
                    title: 'صندوق شحن كامل الألوان',
                    price: '200 ر.س',
                    image: product5,
                },
                {
                    title: 'صندوق شحن كامل الألوان',
                    price: '200 ر.س',
                    image: pcard6,
                },
                {
                    title: 'صندوق شحن كامل الألوان',
                    price: '200 ر.س',
                    image: pcard5,
                }
            ],
            comments:[
                {
                    user: 'آحمد محمد',
                    content: 'هناك حقيقة مثبتة منذ زمن هناك حقيقة مثبتة منذ زمن هناك حقيقة مثبتة منذ زمن ',
                    created_at: 'منذ أربع دقائق',
                    replies:[
                        {
                            user: 'دَرْب برنت',
                            content: 'هناك حقيقة مثبتة منذ زمن هناك حقيقة مثبتة منذ زمن هناك حقيقة مثبتة منذ زمن ',
                            created_at: 'منذ اسبوع'
                        }
                    ]
                },
                {
                    user: 'آحمد محمد',
                    content: 'هناك حقيقة مثبتة منذ زمن هناك حقيقة مثبتة منذ زمن هناك حقيقة مثبتة منذ زمن ',
                    created_at: 'منذ أربع دقائق',
                    replies:[
                        {
                            user: 'دَرْب برنت',
                            content: 'هناك حقيقة مثبتة منذ زمن هناك حقيقة مثبتة منذ زمن هناك حقيقة مثبتة منذ زمن ',
                            created_at: 'منذ اسبوع'
                        }
                    ]
                }
            ]
        }
    },

    computed:{
        isNextAvailable(){
            return this.activeIndex !== (this.product.other_images.length - 1)
        },
        isPrevAvailable(){
            return this.activeIndex !== 0
        }
    },

    methods:{
        slideToNext(){
            if(this.isNextAvailable){
                this.activeIndex ++
            }
        },
        slideToPrev(){
            if(this.isPrevAvailable){
                this.activeIndex --
            }
        }
    }
}
</script>