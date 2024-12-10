<template>
    <AdminIndexPageSection>
        <template v-slot:title>
            تدشين المتجر
        </template>
        <template v-slot:sub-title>
            ابدأ رحلتك الآن
        </template>
        <template v-slot:content>
            <div class="text-aprimary-600 font-bold text-lg">
                <h2>مبارك لك!</h2>
                <span>لقد أتممت عملية التسجيل، ويمكنك البدء بالتعديل على متجرك واضافه المنتجات.</span>
            </div>

            <div class="flex flex-col lg:flex-row items-center">
                <img src="~/assets/images/rocket.png" class="w-[290px]" alt="">
                <div class="flex flex-col my-4">
                    <p class="lg:text-lg font-bold">متجرك اصبح جاهز لبدء العمل ويمكنك تغيير جميع</p>
                    <p class="lg:text-lg font-bold"> 
                        الإعدادات السابقة من داخل  
                        <NuxtLink to="/admin/settings" class="text-aprimary-600 underline">إعدادات المتجر</NuxtLink> 
                    </p>

                    <div class="mt-12">
                        <button class="bg-aprimary-600 p-3 inline text-white">
                            إبدء رحلتك الأن
                        </button>
                    </div>
                </div>
            </div>
        </template>
    </AdminIndexPageSection>
</template>