<template>
    <input 
    class="bg-transparent p-2 border-2 border-asmooky-200 focus:outline-none focus:border-2 focus:border-aprimary-600" 
    :type="type || 'text'" 
    :placeholder="placeholder"
    required>
</template>

<script>
export default {
    props:['placeholder' ,'type']
}
</script>