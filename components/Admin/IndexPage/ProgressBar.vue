<template>
    <div class="progress-bar flex flex-col gap-1 my-4">
        <div class="w-full rounded-full bg-agray-400 h-4 overflow-hidden">
            <div class="rounded-l-full bg-aprimary-400 h-full" :style="`width: ${percentage}%;`"></div>
        </div>
        <span class="text-sm">
            جاهزية متجرك
            {{percentage}}% 
        </span>
    </div>
</template>

<script>
export default {
    props:['percentage']
}
</script>