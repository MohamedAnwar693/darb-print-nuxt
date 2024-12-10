<template>
    <div class="flex flex-col gap-6">
        <!-- client's info ////// -->
        <div class="flex flex-col gap-3">
            <span class="font-bold">
                معلومات العميل
            </span>
            <div class="border-2 p-4 text-sm flex flex-col gap-4">
                <div class="flex items-center gap-2">
                    <Icon name="material-symbols:person-2-outline" size="1.2rem" />
                    <span>{{ order.client.name }}</span>
                </div>
                <div class="flex items-center gap-2">
                    <Icon name="ic:outline-phone-enabled" size="1.2rem" />
                    <span>{{ order.client.phone }}</span>
                </div>
                <div class="flex items-center gap-2">
                    <Icon name="ph:envelope-light" size="1.2rem" />
                    <span>{{ order.client.email }}</span>
                </div>
            </div>
        </div>

        <!-- client's address info ////// -->
        <div class="flex flex-col gap-3">
            <span class="font-bold">
                عنوان العميل
            </span>
            <div class="border-2 p-4 text-sm flex flex-col gap-4">
                <div class="flex items-center gap-2">
                    <span>{{ order.client.address.line_1 }}</span>
                </div>
                <div class="flex items-center gap-2">
                    <span>{{ order.client.address.line_2 }}</span>
                </div>
            </div>
        </div>

        <!-- shipping info ////// -->
        <div class="flex flex-col gap-3 ">
            <span class="font-bold">
                طريقة التوصيل
            </span>
            <div class="border-2 p-4 text-sm flex flex-col gap-4">
                <div class="flex items-center gap-2">
                    <span>{{ order.shipping.type }}</span>
                </div>
                <div class="flex items-center gap-2">
                    <span>{{ order.shipping.cost }}</span>
                </div>
            </div>
        </div>

        <!-- shipping info ////// -->
        <div class="flex flex-col gap-3">
            <span class="font-bold">
                طريقة الدفع
            </span>
            <div class="border-2 p-4 flex flex-col gap-4">
                <div class="flex items-center gap-2">
                    <img class="w-8" :src="order.payment.manner.icon" alt="" />
                    <span class="font-bold">{{ order.payment.manner.label }}</span>
                    <span class="text-xs mr-auto">{{ order.payment.manner.label_2 }}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import cash from '~/assets/cash.png'
const order = {
    client: {
        name: 'محمد احمد محمود ',
        phone: '111111111111',
        email: '@gmail',
        address: {
            line_1: 'السعودية - الرياض ',
            line_2: 'اليرموك - شارع .......',
        }
    },
    shipping:{
        type: 'توصيل الى الموقع',
        cost: 'SAR 25.00',
    },
    payment:{
        manner: {
            label: 'الدفع نقداً',
            label_2: 'الدفع عند التوصيل',
            key: 'cash',
            icon: cash
        }
    }
}
</script>