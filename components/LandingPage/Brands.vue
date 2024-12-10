<template>
    <div class="bg-smooky-400 grid grid-cols-2 lg:grid-cols-6 gap-0 lg:gap-24 xl:px-32 lg:px-24 items-center">
        <div v-for="brand in brands" class="relative group m-auto">
            <img :src="brand.brand" class="w-32 lg:w-auto py-5 lg:py-10" alt="brand" />
            <img src="~/assets/images/flesh.png" class="hidden group-hover:block w-16 absolute -top-10 lg:-top-8 translate-y-1/2 left-0 -translate-x-full" alt="">
            <img :src="brand.client" alt="brand" 
            class="invisible group-hover:visible absolute -top-8 -translate-y-full right-5 w-full scale-125" />
        </div>
    </div>
</template>

<script setup>
// brands images
import brand1 from '~/assets/images/brand-1.png'
import brand2 from '~/assets/images/brand-2.png'
import brand3 from '~/assets/images/brand-3.png'
import brand4 from '~/assets/images/brand-4.png'
import brand5 from '~/assets/images/brand-5.png'
import brand6 from '~/assets/images/brand-6.png'

// clients images
import client1 from '~/assets/images/client-1.png'
import client2 from '~/assets/images/client-2.png'
import client3 from '~/assets/images/client-3.png'
import client4 from '~/assets/images/client-4.png'
import client5 from '~/assets/images/client-5.png'
import client6 from '~/assets/images/client-6.png'

const brands = [
    {
        brand: brand1,
        client: client1,
    },
    {
        brand: brand2,
        client: client2,
    },
    {
        brand: brand3,
        client: client3,
    },
    {
        brand: brand4,
        client: client4,
    },
    {
        brand: brand5,
        client: client5,
    },
    {
        brand: brand6,
        client: client6,
    }
]
</script>