<template>
    <div class="flex items-center gap-2 whitespace-nowrap">
        <!-- first ///// -->
        <NuxtLink :to="links.first" class="hidden lg:block text-xs lg:text-sm">الصفحة الأولى</NuxtLink>

        <!-- previous //////// -->
        <NuxtLink :to="links.previous" class="pagination-link"> 
            <Icon name="ph:caret-right" size="1.2rem" /> 
        </NuxtLink>

        <!-- previous //////// -->
        <NuxtLink :to="links.previous" class="pagination-link"> 
            <Icon name="material-symbols:arrow-right-alt" size="1.2rem" /> 
        </NuxtLink>

        <!-- links -->
        <NuxtLink v-for="link in links.links" :to="link.link" :class="['pagination-link', link.active && 'active']"> 
            {{ link.label }} 
        </NuxtLink>

        <!-- next //////////// -->
        <NuxtLink :to="links.next" class="pagination-link"> 
            <Icon name="material-symbols:arrow-left-alt" size="1.2rem" /> 
        </NuxtLink>
        
        <!-- next //////////// -->
        <NuxtLink :to="links.next" class="pagination-link"> 
            <Icon name="ph:caret-left" size="1.2rem" /> 
        </NuxtLink>
        
        <!-- last ///////// -->
        <NuxtLink :to="links.last" class="hidden lg:block text-xs lg:text-sm">الصفحة الأخيرة</NuxtLink>
    </div>
</template>

<style scoped>
.pagination-link{
    @apply py-2 px-2 lg:px-4;
}
.pagination-link.active{
    @apply bg-aprimary-600 text-white;
}
.pagination-link:not(.active){
    @apply bg-agray-200 hover:bg-aprimary-600 hover:text-white;
}

</style>

<script>
export default {
    props:[
        'links'
    ]
}
</script>