<template>
    <div class="px-4 lg:px-0 container mx-auto">
        <!-- mobile navigation //////// -->
        <div class="items-center p-2 gap-6 flex lg:hidden border-b border-smooky-100">
            <LayoutDefaultPartialsLanguageDropdown />
            <LayoutDefaultPartialsCartButton class="mr-auto" />
        </div>
        
        <div 
        class="flex pt-4 lg:pt-6 pb-4 lg:pb-6 gap-4 lg:gap-8 items-center border-b border-smooky-100">
            <LayoutDefaultPartialsHeaderLogo v-if="!hideLogo" />
            <LayoutDefaultPartialsSearchBox @hideLogo="handleLogoToggle" class="mr-auto lg:mr-0"/>
            <button class="block lg:hidden" @click="hideNavMenuOnSm = false">
              <client-only>
                <fa-icon :icon="['fas', 'bars']" />
              </client-only>
            </button>

            <!-- lg screens navigations -->
            <div class="items-center gap-12 hidden lg:flex">
                <LayoutDefaultPartialsLanguageDropdown />
                <LayoutDefaultPartialsAuthButtons />
                <LayoutDefaultPartialsCartButton />
            </div>
        </div>
        <LayoutDefaultPartialsNavMenu @hideMenu="hideNavMenuOnSm = true" :hideNavMenuOnSm="hideNavMenuOnSm"/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            hideLogo: false,
            hideNavMenuOnSm: true
        }
    },

    methods:{
        handleLogoToggle(value){
            this.hideLogo = value
        }
    }
}
</script>

<style scoped>
.extra-menu:not(.show) { 
    @apply hidden;
}
.extra-menu.show{
    @apply flex items-center;
}
</style>