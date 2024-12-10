<template>
    <LayoutAdminPageHeader title="خيارات الشحن والتوصيل"></LayoutAdminPageHeader>
    <div class="card-style-color p-4 text-agray-300  mt-8 flex flex-col gap-8 animate__animated animate__slideInDown">
        <div class="bg-white p-8 text-agray-300 mb-2 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="bg-white p-2" v-for="(section, index) in sections">
                <div :class="[index == 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-3', 'grid gap-4 my-2']">
                    <NuxtLink :to="link.link" :class="index == 0 ? 'border' : 'border-transparent'" class="hover:bg-agray-200 border p-4 lg:p-8 flex items-center gap-4" v-for="link in section.links">
                        <span class="text-aprimary-600">
                            <img :src="link.icon" size="2.2rem" alt=""/>
                        </span>
                        <div class="flex flex-col gap-2">
                            <span class="font-bold px-2">
                                {{ link.label }}
                            </span>
                            <span>
                                {{ link.description }}
                                <StarRating v-model="rating" :totalStars="5" :readonly="true" @update:rating="setRating"/>
                            </span>
                        </div>
                        <div class="text-aprimary-600 mr-auto">
                            <img :src="section.img" size="2.2rem" alt=""/>
                        </div>-
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
    <div class="card-style-color p-4 text-agray-300  mt-8 flex flex-col gap-8 animate__animated animate__slideInDown">
        <span class="font-bold lg:text-xl px-2 mt-2">إعدادات شركات الشحن</span>
        <div class="bg-white p-8 text-agray-300 mb-2 flex flex-col gap-8 animate__animated animate__slideInDown">
            <div class="bg-white p-2" v-for="(section, index) in setting_section">
                <div :class="[index == 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-3', 'grid gap-4 my-2']">
                    <NuxtLink :to="link.link" :class="index == 0 ? 'border' : 'border-transparent'" class="hover:bg-agray-200 border p-4 lg:p-8 flex items-center gap-4" v-for="link in section.links">
                        <span class="text-aprimary-600">
                            <img :src="link.icon" size="2.2rem" alt=""/>
                        </span>
                        <div class="flex flex-col gap-2">
                            <span class="font-bold">
                                {{ link.label }}
                            </span>
                            <span>
                                {{ link.description }}
                            </span>
                        </div>
                        <div class="text-aprimary-600 mr-auto">
                            <img :src="section.img" size="2.2rem" alt=""/>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
    <!-- <button @click="deliveryTransaction">Get delivery</button> -->
</template>

<script setup>
import { ref } from 'vue';
import StarRating from '../../../components/Admin/StarRating/StarRating.vue';
import {DeliveryHome, DeliveryBoyOrderList, DeliveryTransaction} from '../../../server/delivery-option';
// Define state using `ref` Used Coupon
const response = ref(null);
const error = ref(null);

const deliveryBoyOrderList = async () => {
  try {
    const result = await DeliveryBoyOrderList();
    response.value = result;
  } catch (err) {
    error.value = err.message || 'Error delivery';
  }
};

const deliveryError = ref(null);
const deliveryHome = async () => {
  try {
    const result = await DeliveryHome();
    response.value = result;
  } catch (err) {
    deliveryError.value = err.message || 'Error delivery Home';
  }
};

const deliveryTransactionError = ref(null);
const deliveryTransaction = async () => {
  try {
    const result = await DeliveryTransaction();
    response.value = result;
  } catch (err) {
    deliveryTransactionError.value = err.message || 'Error delivery ';
  }
};

definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الإعدادات',})

/***** Star Rating Component *****/
const rating = ref(2)
// Add a prop for read-only mode
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  totalStars: {
    type: Number,
    default: 5,
  },
  readonly: {
    type: Boolean,
    default: false,
  }
})
// Update setRating to handle readonly
const setRating = (rating) => {
  if (!props.readonly) {
    currentRating.value = rating
    emit('update:modelValue', rating)
  }
}
/***** End OF Star Rating Component *****/


const sections = [
    {
        img: '../../../public/images/vector-arrow.png',
        links: [
            {
                label: 'أرامكس',
                description: null,
                icon: '../../../public/images/delivery-options/aramex-delivery.png',
                link: '/admin/settings',
            },
            {
                label: 'سمسا',
                description: null,
                icon: '../../../public/images/delivery-options/samsa-delivery.png',
                link: '/admin/settings',
            },
            {
                label: 'DHL EXPRESS',
                description: null,
                icon: '../../../public/images/delivery-options/dhl-delivery.png',
                link: '/admin/settings',
            },
            {
                label: 'البريد السعودي سبل',
                description: null,
                icon: '../../../public/images/delivery-options/spl-delivery.png',
                link: '/admin/settings',
            },
            {
                label: 'أي مكان',
                description: null,
                icon: '../../../public/images/delivery-options/aymakan-delivery.png',
                link: '/admin/settings',
            },
            {
                label: 'برق ',
                description: null,
                icon: '../../../public/images/delivery-options/barq-delivery.png',
                link: '/admin/settings',
            },
            {
                label: 'شركات الشحن الخاصة (المناديب)',
                description: null,
                icon: '../../../public/images/delivery-options/company-delivery.png',
                link: '/admin/settings',
            },
            {
                label: 'أضافة شركة شحن جديد',
                description: null,
                icon: '../../../public/images/delivery-options/add-company-delivery.png',
                link: '/admin/settings',
            }
        ]
    },
]

const setting_section = [
    {
        img: '../../../public/images/vector-arrow.png',
        links: [
            {
                label: 'الشحن المجاني',
                description: 'تحويل المدفوعات الالكترونية اسبوعيا',
                icon: '../../../public/images/delivery-options/free-delivery.png',
                link: '/admin/settings',
            },
            {
                label: 'وسائل الدفع المفعلة',
                description: 'مدى , البطاقة الائتمانية',
                icon: '../../../public/images/delivery-options/payment-delivery.png',
                link: '/admin/settings',
            },
            {
                label: 'خيارات شركات الشحن',
                description: 'خصص عمليات الدفع المتاحة وفق شروط محددة ',
                icon: '../../../public/images/delivery-options/option-delivery.png',
                link: '/admin/settings',
            },
            {
                label: 'قيود شركات الشحن',
                description: 'فعل شراء المنتجات بضغطة زر',
                icon: '../../../public/images/delivery-options/restriction-delivery.png',
                link: '/admin/settings',
            },
            {
                label: 'حاسبة أسعار الشحن',
                description: 'احسب رسوم العمليات المالية',
                icon: '../../../public/images/delivery-options/calculate-delivery.png',
                link: '/admin/settings',
            },
        ]
    },
]

</script>

<style scoped>
.card-style-color{
    background: #DFE5EF;
}

</style>