<template>
    <textarea
    :placeholder="placeholder"
    class="bg-transparent p-3 border focus:outline-none focus:border-2 focus:border-aprimary-600" 
    ></textarea>
</template>

<script>
export default {
    props:['placeholder' ,'type']
}
</script>