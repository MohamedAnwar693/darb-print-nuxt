<template>
    <div class="container mx-auto px-4 lg:px-0 py-16">
        <LandingPagePartialsSectionHeader 
        iconless="true"
        linkless="true"
        subTitle="نحول أفكارك لواقع ، نقدم لكم خدمة الطباعة حسب الطلب بأفضل جودة مقابل السعر"
        title="منتجاتك كما تحب ان تراها ، #صُنع ـ بواسطة - دَرْب"/>

        <div>
            <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-8" :class="`active-chunk-${activeChunk}`">
                <LandingPagePartialsProductItem class="animate__slideInLeft animate__animated carousel-item" 
                :footer="item.buttonText"
                iconless="true" 
                cartless="true"
                :item="item" v-for="item in items" />
            </div>
        </div>

        <div class="flex gap-2 justify-center my-14">
            <span @click="activeChunk = 1" class="cursor-pointer rounded-full border-2 border-smooky-800 p-1" :class="activeChunk == 1 ? 'bg-smooky-800' : ''"></span>
            <span @click="activeChunk = 2" class="cursor-pointer rounded-full border-2 border-smooky-800 p-1" :class="activeChunk == 2 ? 'bg-smooky-800' : ''"></span>
        </div>
    </div>
</template>

<style scoped>
.active-chunk-1 .carousel-item:not(:nth-child(-n+5)){
    @apply hidden;
}
.active-chunk-2 .carousel-item:nth-child(-n+5){
    @apply hidden;
}
</style>

<script>
import biladBank from '~/assets/images/bilad-bank.png'
export default {
    data(){
        return {
            items:[
                {   
                    image: biladBank,
                    buttonText: 'بنك البلاد'
                },
                {   
                    image: biladBank,
                    buttonText: 'بنك البلاد 1'
                },
                {   
                    image: biladBank,
                    buttonText: 'بنك البلاد 2'
                },
                {   
                    image: biladBank,
                    buttonText: 'بنك البلاد 3'
                },
                {
                    image: biladBank,
                    buttonText: 'بنك البلاد 4'
                },
                {   
                    image: biladBank,
                    buttonText: '5 بنك البلاد'
                },
                {   
                    image: biladBank,
                    buttonText: 'بنك البلاد 6'
                },
                {   
                    image: biladBank,
                    buttonText: 'بنك البلاد 7'
                },
                {   
                    image: biladBank,
                    buttonText: 'بنك البلاد 8'
                },
                {
                    image: biladBank,
                    buttonText: 'بنك البلاد 9'
                }
            ],
            activeChunk:2
        }
    }
}
</script>