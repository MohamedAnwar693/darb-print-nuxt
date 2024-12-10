<template>
    <div class="bg-smooky-50 p-2 flex items-center gap-4">
        <img :src="item.image" class="w-12" alt="" />
        <div class="flex flex-col gap-1 flex-1">
            <div class="flex items-center w-full">
                <span class="font-bold xl:text-base text-xs" v-text="item.title"></span>
                <span class="mr-auto xl:text-base text-xs whitespace-nowrap" v-text="item.price"></span>
            </div>

            <div class="flex flex-wrap gap-1 w-full">
                <UiSelect class="border text-smooky-300 p-1 bg-white text-xs xl:text-base" dropdownClasses="w-full">
                    <template v-slot:selected-option>
                        الكمية
                    </template>
                    <template v-slot:options>
                        <div class="flex items-center cursor-pointer bg-primary-800 text-white p-1 hover:bg-primary-800 hover:text-white">
                            100
                            <fa-icon class="mr-auto" :icon="['fas', 'check']" />
                        </div>
                        
                        <div class="flex items-center cursor-pointer bg-white p-1 hover:bg-primary-800 hover:text-white">200</div>
                    </template>
                </UiSelect>
    
                <UiSelect v-if="! colorless" class="border text-smooky-300 p-1 bg-white text-xs xl:text-base" dropdownClasses="w-full">
                    <template v-slot:selected-option>
                        البرتقالي
                        <span style="background-color: #FF8C00;" class="rounded-full h-4 w-4 border-2 border-smooky-150"></span>
                    </template>
                    <template v-slot:options>
                        <div class="flex items-center cursor-pointer bg-primary-800 text-white p-1 hover:bg-primary-800 hover:text-white">
                            البرتقالي
                            <fa-icon class="mr-auto" :icon="['fas', 'check']" />
                        </div>
                        <div class="flex items-center cursor-pointer bg-white p-1 hover:bg-primary-800 hover:text-white">البرتقالي</div>
                    </template>
                </UiSelect>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['item' ,'colorless']
}
</script>