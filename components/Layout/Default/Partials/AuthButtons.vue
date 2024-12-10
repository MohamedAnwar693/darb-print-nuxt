<template>
    <div class="auth-buttons flex items-center gap-1 group cursor-pointer">
        <client-only>
            <fa-icon class="text-xl lg:text-2xl text-rosy-800" :icon="['far', 'user']" />
        </client-only>
        <span class="text-primary-800 font-bold text-sm lg:text-base">حسابي</span>
    </div>
</template>