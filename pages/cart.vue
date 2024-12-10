<template>
    <div class="flex-1 flex flex-col h-full items-center px-2 lg:px-0 py-6">
        <CartPageIsEmpty v-if="cartItems.length == 0"/>
        <div v-if="cartItems.length > 0" class="grid grid-cols-1 mx-auto w-full lg:w-1/3 gap-6">
            <CartPageItem @removeItemFromCart="removeItemFromCart" v-for="(item ,index) in cartItems" v-bind:key="index" :item="item" />
            <CartPageEnterCoupon />
            <CartPageTotal />
            
            <div class="flex">
                <NuxtLink to="/checkout" class="group py-4 px-4 w-64 text-center border-2 bg-primary-800 lg:mr-auto text-white flex gap-2 place-content-center items-center">
                    <span>إتمام الطلب</span>
                    <fa-icon class="group-hover:-translate-x-2" :icon="['fas', 'arrow-left']" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  setup(){
    useHead({
        title: 'السلة',
    })
  },
  
  data(){
    return {
        cartItems:[
            {
                id: 1,
                name: 'بوكس حلا ب غطاء',
                price: 200,
                quantity: 100,
                image: ''
            },
            {
                id: 2,
                name: 'بوكس حلا ب غطاء',
                price: 200,
                quantity: 100,
                image: ''
            }
        ]
    }
  },
  
  methods:{
    removeItemFromCart(target){
       this.cartItems = this.cartItems.filter(item => item.id !== target)
    }
  }
}
</script>