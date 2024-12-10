<template>
    <div>
        <h2 class="font-bold text-lg lg:text-xl text-aprimary-600">
            طريقة الدفع
        </h2>

        <div class="flex flex-col gap-6 my-8">
            <div v-for="manner in paymentManners" class="flex gap-4 items-center px-5">
                <img :style="`width:${manner.width ? manner.width : '100px'};`" :src="manner.logo" :alt="manner.name" />
                
                <p class="flex flex-col">
                    <span class="text-lg font-bold">{{ manner.name }}</span>
                </p>
                <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                    <UiAdminToggler :active="manner.active" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import masterCard from '~/assets/visa-mcard.png'
import madalogo from '~/assets/mada.png'
import applepay from '~/assets/apple-pay.png'
import banktransfer from '~/assets/bank-transfer-2.png'
import cash from '~/assets/cash.png'

const paymentManners = [
    {
        name: 'البطاقة الإئتمانية',
        logo: masterCard,
        active: false,
    },
    {
        name: 'مدى',
        logo: madalogo,
        active: true,
    },
    {
        name: 'Apple Pay',
        logo: applepay,
        active: true,
    },
    {
        name: 'التحويل البنكى',
        logo: banktransfer,
        active: false,
        width: '65px'
    },
    {
        name: 'الدفع نقداً',
        logo: cash,
        active: true,
        width: '65px'
    }
]
</script>