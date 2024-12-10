<template>
    <span>
        <li v-if="!link.nested">
            <NuxtLink :to="link.link" class="nav-link">
                <Icon :name="link.icon" size="1.5rem" />
                <span v-text="link.label"></span>
            </NuxtLink>
        </li>
        
        <li v-if="!link.link && link.nested">
            <div class="nav-link is-nested" @click="show = !show">
                <Icon :name="link.icon" size="1.5rem" />
                <span class="mx-2" v-text="link.label"></span>
                <Icon v-if="link.nested" class="mr-auto" name="humbleicons:chevron-down"/>
                <div class="pt-4 pr-4" v-show="show">
                    <NuxtLink @click="$parent.$emit('toggleSidebar')" v-for="nested in link.nested" :link="nested" :to="nested.link" class="nav-link">
                        <Icon :name="nested.icon" size="1.5rem" />
                        <span v-text="nested.label"></span>
                    </NuxtLink>
                </div>
            </div>
        </li>
    </span>
</template>
<style scoped>
.nav-link{
    @apply cursor-pointer items-center gap-2 py-2 my-1 pr-1 pl-6 border border-transparent;
}
.nav-link:not(.is-nested){
    @apply inline-flex cursor-pointer items-center gap-2 py-2 my-1 pr-1 pl-6 border border-transparent hover:text-inherit hover:bg-transparent hover:border hover:border-aprimary-600;
}
</style>
<script>
export default {
    props: ["link", "active"],
    data(){
        return {
            show: false
        }
    }
}
</script>