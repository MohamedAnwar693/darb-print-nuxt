<template>
    <button 
    :class="type == 'danger' 
    ? 'bg-ared-600 hover:text-ared-600 hover:border-ared-600' 
    : 'bg-aprimary-600 hover:text-aprimary-600 hover:border-aprimary-600'"
    class="font-bold hover:bg-transparent border-2 border-transparent hover:border-2 text-white px-4 py-1">
        <slot name="content"></slot>
    </button>
</template>

<script>
export default {
    props:['type']
}
</script>