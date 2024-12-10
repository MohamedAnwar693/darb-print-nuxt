<template>
    <div class="bg-asmooky-200 p-4 text-agray-300">
        <h2 @click="open = !open" class="cursor-pointer font-bold text-xl">
            <slot name="title"></slot>
            <button>
                <Icon v-if="open" name="humbleicons:chevron-down"/>
                <Icon v-if="!open" name="humbleicons:chevron-left"/>
            </button>
        </h2>
        <span>
            <slot name="sub-title"></slot>
        </span>
        <div v-if="open" class="bg-white p-4 text-agray-300 mt-4 flex flex-col gap-6">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>
const open = ref(true)
</script>