<template>
    <div class="flex items-center">
        <div class="flex flex-col gap-2">
            <h1 class="text-xl lg:text-3xl font-bold text-aprimary-600">{{ title }}</h1>
            <span class="text-sm">{{ subTitle }}</span>
        </div>

        <div class="mr-auto flex gap-2">
            <slot name="action-buttons"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:['title' ,'subTitle']
}
</script>