<template>
    <div class="bg-primary-800 text-white py-12">
        <div class="container mx-auto flex flex-col gap-12">
            <div class="flex justify-center lg:text-xl">
                <LayoutDefaultHistory homeless="true">
                    <template v-slot:links>
                        <NuxtLink>
                            <span>الهدايا الدعائية</span>
                        </NuxtLink>
                    </template>
                </LayoutDefaultHistory>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center px-2 lg:px-0">
                <button v-for="(category, index) in categories" v-bind:key="index" 
                :class="activeCategoy === category.label ? 'bg-white text-smooky-800' : 'border-white hover:bg-white hover:text-smooky-800 '"
                class="border px-8 py-1 rounded-full flex gap-2 justify-center items-center whitespace-nowrap">
                    <client-only v-if="category.icon">
                        <fa-icon :icon="category.icon" />
                    </client-only>
                    <span class="font-bold" v-text="category.label"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['activeCategoy'],
    data(){
        return {
            categories:[
                {
                    label: 'أقلام',
                    icon: ['fas', 'pen'],
                },
                {
                    label: 'نوته',
                    icon: ['fas', 'note-sticky'],
                },
                {
                    label: 'تي شيرت',
                    icon: ['fas', 'shirt'],
                },
                {
                    label: 'أكياس',
                    icon: ['fas', 'bag-shopping'],
                },
                {
                    label: 'أكواب',
                    icon: ['fas', 'mug-hot'],
                },
                {
                    label: 'كاب',
                    icon: ['fab', 'redhat'],
                },
                {
                    label: 'اشرطة تعليق'
                },
                {
                    label: 'بروشات',
                    icon: ['fab', 'redhat'],
                }
            ]
        }
    }
}
</script>