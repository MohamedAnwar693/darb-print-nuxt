<template>
    <div class="flex gap-2 text-xs lg:text-sm whitespace-nowrap">
        <NuxtLink to="/" v-if="!homeless" class="gap-2 flex items-center">
            <client-only>
                <fa-icon :icon="['fas', 'house']" />
            </client-only>
            <span class="font-bold">الصفحة الرئيسية</span>
        </NuxtLink>
        <slot name="links"></slot>
    </div>
</template>

<script>
export default {
    props:['homeless']
}
</script>