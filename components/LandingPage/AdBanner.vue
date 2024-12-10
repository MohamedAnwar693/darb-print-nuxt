<template>
    <div class="container mx-auto mx-auto bg-primary-100 flex flex-col lg:flex-row items-center place-content-center gap-2 lg:gap-16 p-5 lg:p-3">
        <img :src="imagesChunk" alt="products chunk" class="w-full lg:w-auto lg:h-48 xl:h-72" />
        <div class="text-center flex flex-col gap-4 lg:gap-12">
            <span class="text-2xl lg:text-4xl leading-normal">
                <slot name="title"></slot>
            </span>
            <button class="bg-rosy-800 lg:bg-smooky-800 text-white border-2 hover:bg-transparent hover:border-smooky-800 hover:text-smooky-800 text-lg font-bold p-2 w-64 mx-auto">
                <slot name="button-content"></slot>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props:['imagesChunk']
}
</script>