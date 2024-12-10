<template>
  <div :class="hideNavMenuOnSm ? 'hidden lg:inline' : 'lg:inline'">  
    <div class="overlay block lg:hidden"></div>

    <ul class="nav-menu">
      <div class="flex lg:hidden absolute top-0 right-0 p-2 border-b border-smooky-100 items-center justify-between w-full">
        <LayoutDefaultPartialsAuthButtons />

        <button @click="$emit('hideMenu', true)">
          <client-only>
            <fa-icon class="text-2xl" :icon="['fas', 'xmark']" />
          </client-only>
        </button>
      </div>

      <li class="nav-link" :class="activeTab == 'personal-cards' ? 'active' : ''" @mouseenter="setActiveTab('personal-cards')" >
        <span class="nav-item-span">كروت شخصية</span>
      </li>
      <LayoutDefaultPartialsPersonalCardsTab class="block lg:hidden" v-show="activeTab == 'personal-cards'" />
      
      <li class="nav-link" :class="activeTab == 'promotional-cards' ? 'active' : ''" @mouseenter="setActiveTab('promotional-cards')">
        <span class="nav-item-span">الهدايا الدعائية</span>
      </li>
      <LayoutDefaultPartialsPromotionalCardsTab class="block lg:hidden" v-show="activeTab == 'promotional-cards'" />
      
      <li class="nav-link">
        <span class="nav-item-span">مطبوعات ورقية</span>
      </li>
      <li class="nav-link">
        <span class="nav-item-span">التغليف والتعبئة</span>
      </li>
      <li class="nav-link">
        <span class="nav-item-span">طباعة كبيرة الحجم</span>
      </li>
      <li class="nav-link">
        <span class="nav-item-span">طباعة الكانفاس</span>
      </li>
      <li class="nav-link">
        <span class="nav-item-span">معارض ومؤتمرات</span>
      </li>
      <li class="nav-link">
        <span class="nav-item-span">منتجات بتصاميم جاهزة</span>
      </li>
      <li class="nav-link">
        <span class="nav-item-span">العروض</span>
      </li>
    </ul>

    <div class="container mx-auto">
      <hr class="border-smooky-50" />
    </div>

    <LayoutDefaultPartialsPersonalCardsTab class="animate__fadeIn animate__animated hidden lg:block" v-show="activeTab == 'personal-cards'" />
    <LayoutDefaultPartialsPromotionalCardsTab class="animate__fadeIn animate__animated hidden lg:block" v-show="activeTab == 'promotional-cards'" />
  </div> 
</template>

<script>
export default {
  props:['hideNavMenuOnSm'],
  data(){
    return {
      activeTab: ''
    }
  },

  methods:{
    /**
     * set active navigation tab
     * @param {*} target 
     */
    setActiveTab(target){
      target == this.activeTab 
      ? this.activeTab = ''
      : this.activeTab = target
    },

    closeMenus (e) {
      if (!this.$el.contains(e.target)) {
        this.activeTab = ''
      }
    },
  },

  mounted () {
    document.addEventListener('mouseover', this.closeMenus)
  },
  
  beforeDestroy () {
    document.removeEventListener('mouseover',this.closeMenus)
  }
}
</script>

<style scoped>
.overlay{
  @apply fixed top-0 left-0 h-screen w-screen backdrop-blur-sm bg-black/40 z-10 ;
}
.nav-menu{
  @apply overflow-y-auto lg:w-full h-screen lg:h-auto bg-white z-20 pt-10 px-10 lg:pt-0 lg:px-0 fixed top-0 right-0 lg:min-h-0 lg:min-w-0 lg:static flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-4 lg:text-center whitespace-nowrap;
}
.nav-link{
  @apply py-3 lg:py-4 border-b-2 border-transparent whitespace-nowrap;
}
.nav-item-span{
  @apply font-semibold cursor-pointer;
}
.nav-link:hover, .nav-link.active{
  @apply text-primary-800 font-extrabold border-rosy-800;
}
</style>