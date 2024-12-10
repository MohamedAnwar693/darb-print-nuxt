<template>
    <div class="flex flex-col gap-4">
        <div class="bg-smooky-50 py-8 px-4 lg:px-16 lg:py-32 relative">
            <img :src="product.other_images[activeIndex]" class="w-4/5 mx-auto" alt="" />
    
            <div class="absolute right-0 w-full p-4 inset-y-1/2 flex">
                <span v-show="isPrevAvailable" @click="slideToPrev" class="hover:bg-primary-800 hover:text-white cursor-pointer bg-white p-1 shadow-lg h-12 w-12 flex flex-col">
                    <client-only>
                        <fa-icon class="m-auto" :icon="['fas','arrow-right']" />
                    </client-only>
                </span>
    
                <span v-show="isNextAvailable" @click="slideToNext" class="hover:bg-primary-800 hover:text-white cursor-pointer mr-auto bg-white p-1 shadow-lg h-12 w-12 flex flex-col">
                    <client-only>
                        <fa-icon class="m-auto" :icon="['fas','arrow-left']" />
                    </client-only>
                </span>
            </div>
            
        </div>
    
        <div class="grid grid-cols-4 gap-4">
            <div v-for="(image, index) in product.other_images"
            @click="activeIndex = index"
            class="bg-smooky-50 p-4 cursor-pointer" 
            :class="index == activeIndex ? 'border-2 border-primary-800' : ''">
                <img :src="image" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['product'],
    data(){
        return {
            activeIndex: 1
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