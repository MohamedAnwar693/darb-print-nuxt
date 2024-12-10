<template>
    <div class="bg-agray-200 p-4 overflow-x-auto whitespace-nowrap">
        <table class="w-full text-black text-sm table">
            <thead>
                <th>
                    <input type="checkbox" />
                </th>
                <th v-for="row in tableHeadColumns">
                    <div class="flex items-center gap-2">
                        <span>{{ row.label }}</span>
                        <Icon v-if="row.sortable" name="ph:caret-up-down" size="1.2rem" />
                    </div>
                </th>
            </thead>
            <tbody>
                <slot name="rows"></slot>
                <tr v-if="empty">
                    <td :colspan="tableHeadColumns.length + 1" class="text-center">
                        <slot name="empty"></slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
.table tr{
    @apply bg-white border-2;
}
.table td, .table th {
  @apply p-8;
}
.table td{
    @apply border-t-2 border-b-2;
}
.table td:first-child{
    @apply border-r-2;
}
.table td:last-child{
    @apply border-l-2;
}
.table {
  border-collapse: separate; 
  border-spacing: 0 1em;
}
</style>

<script>
export default {
    props:[
        'tableHeadColumns',
        'empty'
    ]
}
</script>