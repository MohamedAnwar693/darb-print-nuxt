<template>
    <div dir="rtl" class="admin-font admin-layout">
        <LayoutAdminSidebar @toggleSidebar="handleSidebarToggling()" 
        :class="['sidebar z-40', sidebarOpened ? 'block' : 'hidden']"/>
        
        <div :class="['overlay', sidebarOpened ? 'block lg:hidden': 'hidden']"></div>

        <div class="bg-asmooky-100 flex flex-col lg:pr-2" :class="sidebarOpened ? 'sidebar-opened' : ''">
            <LayoutAdminNavbar class="sticky top-0" @toggleSidebar="sidebarOpened = !sidebarOpened" />
            <div class="min-h-screen p-4">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
const isOnSmallScreens = ref(false);
const sidebarOpened = ref(isOnSmallScreens ? false : true);
onMounted(() => {
    if(window.innerWidth < 1024){
        isOnSmallScreens.value = true;
        sidebarOpened.value = false;
    }else{
        isOnSmallScreens.value = false;
        sidebarOpened.value = true;
    }
})

const handleSidebarToggling = () => {
    if(isOnSmallScreens.value){
        sidebarOpened.value = !sidebarOpened
    }
}
</script>

<style lang="scss">
@import '~/assets/sass/admin/index.scss';
</style>