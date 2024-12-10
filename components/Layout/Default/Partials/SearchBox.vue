<template>
    <div class="lg:flex-1 flex relative">
        <button @click="showSearcherOnSm = !showSearcherOnSm" class="px-3 py-2 block lg:hidden">
            <fa-icon v-show="!showSearcherOnSm" :icon="['fas', 'magnifying-glass']" />
            <fa-icon v-show="showSearcherOnSm" :icon="['fas', 'xmark']" />
        </button>
        
        <input type="text" 
        @focus="showIfIsFiltering"
        v-model="keyword"
        :class="showSearcherOnSm ? '' : 'hidden'"
        class="search-box focus:outline-none focus:border-primary-800 lg:block border-2 border-smooky-50 bg-smooky-100 w-full h-full p-2" placeholder="أدخل كلمة البحث"/>

        <button :class="showSearcherOnSm ? '' : 'hidden'" class="bg-primary-800 hover:bg-transparent hover:text-primary-800 border-2 border-primary-800 px-5 py-2 lg:block text-white">
            <fa-icon :icon="['fas', 'magnifying-glass']" />
        </button>

        <LayoutDefaultPartialsFilteredItemsDropdown v-show="showFilteredItems" />
    </div>
</template>

<script>
export default {
    data(){
        return {
            showSearcherOnSm: false,
            showFilteredItems: false,
            keyword: ''
        }
    },
    watch:{
        showSearcherOnSm(newValue, oldValue){
            this.$emit('hideLogo' ,newValue)
        },
        keyword(newValue){
            if(!! newValue){
                this.showFilteredItems = true
            }
        }
    },

    methods:{
        close (e) {
          if (!this.$el.contains(e.target)) {
            this.showFilteredItems = false
          }
        },
        showIfIsFiltering(){
            if(!! this.keyword){
                this.showFilteredItems = true
            }
        }
    },

    mounted () {
      document.addEventListener('click', this.close)
    },

    beforeDestroy () {
      document.removeEventListener('click',this.close)
    }
}
</script>
<style scoped>
.search-box{
    padding: 11.5px 41px 13.5px 140px;
}
.search-box::placeholder{
    @apply text-smooky-300;
    @apply font-bold;
}
</style>