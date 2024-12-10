<template>
    <LayoutAdminPageHeader title="خيارات المتجر"></LayoutAdminPageHeader>
    <div class="card-style-color p-4 text-agray-300  mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">المنتجات</span>
        <div class="bg-white p-8 text-agray-300 mb-2  flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 mb-4 mt-2">
                <div class="flex flex-col gap-4 ">
                    <div v-for="product in products" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">{{ product.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="product.active" />
                        </div>
                    </div>
                    <div class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">تخصيص ظهور مرات الشراء للمنتجات</span>
                        </p>
                        <div class="mr-auto">
                            <label class=" flex flex-col gap-2">
                                <UiAdminSelect class="weight-button">
                                    <template v-slot:selected-option>
                                        <img  src="../../../public/images/product-store.png" alt=""/>
                                        <span>كجم</span>
                                    </template>
                                    <template v-slot:options>
                                        <div class="p-4 flex gap-4 hover:bg-asmooky-100" v-for="weight in weights">
                                            <span>{{ weight.label }}</span>
                                        </div>
                                    </template>
                                </UiAdminSelect>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4  mt-2">
                    <div class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">تخصيص ظهور مرات الشراء للمنتجات</span>
                        </p>
                        <div class=" mr-auto p-5">
                            <button class="text-aprimary-600 font-bold lg:text-xl">
                                تعيين
                            </button>
                        </div>
                    </div>
                    <div class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">عرض منتجات ربما تعجبك في صفحة المنتج</span>
                        </p>
                        <div class=" mr-auto p-5">
                            <button class="text-aprimary-600 font-bold lg:text-xl">
                                تعيين
                            </button>
                        </div>
                    </div>
                    <div v-for="add_product in add_products" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">{{ add_product.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="add_product.active" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-style-color p-4 mt-12 text-agray-300  flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">الطلبات</span>
        <div class="bg-white p-8 text-agray-300 mb-2  flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 mb-4 mt-2">
                <div class="flex flex-col gap-4 ">
                    <div class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">استقبال الطلبات</span>
                        </p>
                        <div class=" mr-auto p-5">
                            <button class="text-aprimary-600 font-bold lg:text-xl">
                                تعيين
                            </button>
                        </div>
                    </div>
                    <div class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">السماح بإضافة ملاحظة على الطلب</span>
                        </p>
                        <div class=" mr-auto p-5">
                            <button class="text-aprimary-600 font-bold lg:text-xl">
                                تعيين
                            </button>
                        </div>
                    </div>
                    <div class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">تعيين حالة (تم التنفيذ) عند الطلب</span>
                        </p>
                        <div class=" mr-auto p-5">
                            <button class="text-aprimary-600 font-bold lg:text-xl">
                                تعيين
                            </button>
                        </div>
                    </div>
                    <div v-for="request in requests" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">{{ request.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="request.active" />
                        </div>
                    </div>
                    <div class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">تخصيص قائمة تجهيز الطلب</span>
                        </p>
                        <div class=" mr-auto p-5">
                            <button class="text-aprimary-600 font-bold lg:text-xl">
                                تعيين
                            </button>
                        </div>
                    </div>
                    <div class="flex gap-4 items-center px-5 mt-4">
                        <p class="flex flex-col">
                            <span class="text-lg">الحد الأدنى للطلب</span>
                        </p>
                        <div class="mr-auto">
                            <label class=" flex flex-col gap-2">
                                <UiAdminInput class="text-center w-20 weight-button" placeholder="0 ر.س">
                                    <template v-slot:options>
                                        <div class="p-4 flex gap-4 hover:bg-asmooky-100" v-for="weight in weights">
                                            <span>{{ weight.label }}</span>
                                        </div>
                                    </template>
                                </UiAdminInput>
                            </label>
                        </div>
                    </div>
                    <div class="flex gap-4 items-center px-5 mt-7">
                        <p class="flex flex-col">
                            <span class="text-lg">إشعارات حالة الطلب</span>
                        </p>
                        <div class="mr-auto">
                            <label class=" flex flex-col gap-2">
                                <UiAdminSelect class="weight-button">
                                    <template v-slot:selected-option>
                                        <span>البريد الالكتروني</span>
                                    </template>
                                    <template v-slot:options>
                                        <div class="p-4 flex gap-4 hover:bg-asmooky-100" v-for="email in emails">
                                            <span>{{ email.label }}</span>
                                        </div>
                                    </template>
                                </UiAdminSelect>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4  mt-2">
                    <div class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">أوقات استقبال الطلبات</span>
                        </p>
                        <div class=" mr-auto p-5">
                            <button class="text-aprimary-600 font-bold lg:text-xl">
                                تعيين
                            </button>
                        </div>
                    </div>
                    <div class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">السماح للعميل بإلغاء الطلب قبل البدء بتنفيذه</span>
                        </p>
                        <div class=" mr-auto p-5">
                            <button class="text-aprimary-600 font-bold lg:text-xl">
                                تعيين
                            </button>
                        </div>
                    </div>
                    <div v-for="payment in request_payments" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">{{ payment.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="payment.active" />
                        </div>
                    </div>
                    <div class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">تخصيص صفحة اكتمال الطلب</span>
                        </p>
                        <div class=" mr-auto p-5">
                            <button class="text-aprimary-600 font-bold lg:text-xl">
                                تعيين
                            </button>
                        </div>
                    </div>
                    <div class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">طريقة خصم رسوم بوليصات الشحن</span>
                        </p>
                        <div class=" mr-auto p-5">
                            <button class="text-aprimary-600 font-bold lg:text-xl">
                                تعيين
                            </button>
                        </div>
                    </div>
                    <div class="flex gap-4 items-center px-5 mt-4">
                        <p class="flex flex-col">
                            <span class="text-lg">إرسال محتوى المنتجات الرقمية</span>
                        </p>
                        <div class="mr-auto">
                            <label class=" flex flex-col gap-2">
                                <UiAdminSelect class="weight-button">
                                    <template v-slot:selected-option>
                                        <span>البريد الالكتروني</span>
                                    </template>
                                    <template v-slot:options>
                                        <div class="p-4 flex gap-4 hover:bg-asmooky-100" v-for="email in emails">
                                            <span>{{ email.label }}</span>
                                        </div>
                                    </template>
                                </UiAdminSelect>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-style-color p-4 text-agray-300  mt-12 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">العملاء</span>
        <div class="bg-white p-8 text-agray-300 mb-2  flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 mb-4 mt-2">
                <div class="flex flex-col gap-4 ">
                    <div v-for="client in clients" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">{{ client.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="client.active" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4  mt-2">
                    <div v-for="login in login_clients" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">{{ login.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="login.active" />
                        </div>
                    </div>
                    <div class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">طريقة تحديد عنوان العميل</span>
                        </p>
                        <div class=" mr-auto p-5">
                            <button class="text-aprimary-600 font-bold lg:text-xl">
                                تعيين
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-style-color p-4 text-agray-300  mt-12 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">الاسئلة و التقييمات</span>
        <div class="bg-white p-8 text-agray-300 mb-2  flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 mb-4 mt-2">
                <div class="flex flex-col gap-4 ">
                    <div v-for="question in questions" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">{{ question.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="question.active" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4  mt-2">
                    <div v-for="evaluation in evaluations" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">{{ evaluation.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="evaluation.active" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-style-color p-4 text-agray-300  mt-12 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">كوبونات التخفيض</span>
        <div class="bg-white p-8 text-agray-300 mb-2  flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 mb-4 mt-2">
                <div class="flex flex-col gap-4 ">
                    <div v-for="coupon in coupons" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">{{ coupon.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="coupon.active" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4  mt-2">
                    <div v-for="active in activate_coupons" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">{{ active.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="active.active" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-style-color p-4 text-agray-300  mt-12 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">الخيارات العامة</span>
        <div class="bg-white p-8 text-agray-300 mb-2  flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="grid lg:grid-cols-2 gap-12 mb-4 mt-2">
                <div class="flex flex-col gap-4 ">
                    <div v-for="general in general_options" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">{{ general.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="general.active" />
                        </div>
                    </div>
                </div>
                <div class="flex gap-4 px-5">
                    <p class="flex flex-col mt-4">
                        <span class="text-lg">تخصيص حالات حساب التقارير</span>
                    </p>
                    <div class="mr-auto p-4">
                        <button class="text-aprimary-600 font-bold lg:text-xl">
                            تعيين
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- <button @click="updateProduct">update Product</button> -->
    </div>
</template>

<script setup>
import {UpdateProduct} from '../../../server/store-option';
import { ref } from 'vue';
// Define state using `ref` 
const response = ref(null);
const error = ref(null);

const updateProduct = async () => {
  const requestData = {
    "product_id": 1,
    "name": "test",
    "category_id": 1,
    "description": "test",
    "cover_image": "png.png",
    "product_image": "product.png",
    "price": 1000,
    "discount_type": "test",
    "discount_amount": 1000,
    "product_stock": "yes",
    "trending": "yes",
    "variant_product": "yes",
  };
  try {
    const result = await UpdateProduct(requestData);
    response.value = result;
  } catch (err) {
    error.value = err.message || 'Error payment';
  }
};


definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الإعدادات',})


const products = [
    {
        name: 'إمكانية تكرار المنتجات في السلة',
        active: true,
    },
    {
        name: 'عرض المنتجات التي نفذت في نهاية الصفحات',
        active: true,
    },
    {
        name: 'عرض علامة - عندما يكون سعر المنتج صفر',
        active: false,
    },
    {
        name: 'إظهار العروض الخاصة أسفل المنتج',
        active: true,
    },
    {
        name: 'تفعيل إظهار نطاق السعر على المنتج',
        active: false,
    },
    {
        name: 'عرض الرقم المخزني SKU في تفاصيل المنتج والطلب',
        active: true,
    }
]

const add_products = [
    {
        name: 'عرض زر تفاصيل أكثر لوصف المنتج',
        active: true,
    },
    {
        name: 'إضافة منتج العرض المجاني تلقائيا إلى السلة',
        active: true,
    },
    {
        name: 'عرض الوزن في تفاصيل المنتج صفحة السلة والفواتير',
        active: false,
    },
    {
        name: 'إظهار حقل رمز التنسيق الجمركي (HS Code) ضمن بيانات المنتج',
        active: false,
    }
]

const weights = [
    {
        label: '5 كجم',
    },
    {
        label: '10 كجم',
    },
    {
        label: '15 كجم',
    },
]

const requests = [
    {
        name: 'عرض مؤشر الشحن',
        active: true,
    },
    {
        name: 'الإقرار قبل ارسال الطلب',
        active: true,
    },
]

const request_payments = [
    {
        name: 'تعطيل مهلة الدفع في التحويل البنكي',
        active: true,
    },
    {
        name: 'تفعيل إعادة الطلب',
        active: true,
    },
    {
        name: 'السماح بإرفاق الملاحظة مع رسالة حالة الطلب',
        active: true,
    },
]

const emails = [
    {
        label: 'example@gmail.com' 
    }
]

const clients = [
    {
        name: 'البريد الإلكتروني اختياري للعملاء',
        active: false,
    },
    {
        name: 'تنبيه العملاء باستخدام متصفح سفاري للدفع من خلال Apple Pay',
        active: true,
    },
]


const login_clients = [
    {
        name: 'تمكين تسجيل الدخول باستخدام البريد',
        active: true,
    }
]

const questions = [
    {
        name: 'نشر الأسئلة مباشرةً دون مراجعة',
        active: false,
    },
    {
        name: 'تفعيل إضافة الأسئلة في المنتجات',
        active: true,
    }
]

const evaluations = [
    {
        name: 'تفعيل الأسئلة في الصفحات التعريفية',
        active: true,
    },
    {
        name: 'منع الزوار من إضافة أسئلة',
        active: true,
    }
]

const coupons = [
    {
        name: 'عرض تبويب التخفيضات',
        active: true,
    },
    {
        name: 'تفعيل تطبيق الكوبون في السلة',
        active: true,
    }
]

const activate_coupons = [
    {
        name: 'تفعيل كوبونات التخفيض',
        active: true,
    }
]

const general_options = [
    {
        name: 'استخدام الأرقام العربية',
        active: true,
    },
    {
        name: 'عرض عبارة  “صنع باتقانعلى منصة ....”',
        active: true,
    },
]

</script>

<style scoped>
.card-style-color{
    background: #DFE5EF;
}

.weight-button{
    border-radius: 5px 5px 5px 5px;
    opacity: 0px;
    border: 1px solid #5D87FF;
}
</style>
