<template>
    <div>
        <div class="flex flex-wrap justify-around flex-row lg:flex-col gap-2">
            <div 
            @click="activeItem = item.label"
            :class="activeItem == item.label ? 'text-primary-800 bg-primary-200 font-bold' : 'hover:text-primary-800 hover:bg-primary-200 hover:font-bold text-smooky-800'" 
            class="rounded-full lg:rounded-none cursor-pointer whitespace-nowrap px-4 py-2 flex items-center gap-4" v-for="item in sidebarItems">
                <img class="w-6" :src="item.icon" alt="">
                <span>{{ item.label }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            showOnSmScreens: false,
            activeItem: 'صناديق',
            sidebarItems: [
                {
                    label: 'صناديق',
                    icon: 'https://cdn-icons-png.flaticon.com/128/679/679720.png',
                },
                {
                    label: 'أكواب',
                    icon: 'https://cdn-icons-png.flaticon.com/128/112/112414.png',
                },
                {
                    label: 'حافظة حرارة',
                    icon: 'https://cdn-icons-png.flaticon.com/128/2932/2932643.png',
                },
                {
                    label: 'تي شيرت',
                    icon: 'https://cdn-icons-png.flaticon.com/128/863/863684.png',
                },
                {
                    label: 'الحقائب',
                    icon: 'https://cdn-icons-png.flaticon.com/128/7466/7466185.png',
                },
                {
                    label: 'اللوازم المكتبية',
                    icon: 'https://cdn-icons-png.flaticon.com/128/2904/2904859.png',
                },
                {
                    label: 'أجهزة تقنية',
                    icon: 'https://cdn-icons-png.flaticon.com/128/977/977411.png',
                },
                {
                    label: 'رياضة',
                    icon: 'https://cdn-icons-png.flaticon.com/128/10934/10934755.png',
                }
            ]
        }
    }
}
</script>