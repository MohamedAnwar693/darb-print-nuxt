<template>
    <label class="flex border-2 border-asmooky-200 w-full p-4 cursor-pointer hover:border-2 hover:border-aprimary-600">
        <div class="flex flex-col gap-2 text-center mx-auto">
            <Icon class="mx-auto" name="ph:cloud-arrow-up-light" size="6rem" />
            <slot class="whitespace-nowrap" name="text"></slot>
        </div>
        <input type="file" class="hidden" />
    </label>
</template>