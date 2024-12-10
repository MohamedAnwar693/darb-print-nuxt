<template>
    <div class="flex">
        <UiIconedFormInput type="text" class="flex-1" placeholder="رقم الموبايل">
            <template v-slot:icon>
                <client-only>
                    <fa-icon class="text-xl" :icon="['fas', 'phone']" />
                </client-only>
            </template>
        </UiIconedFormInput>
      
       <UiSelect class="border-2 border-r-0 border-smooky-100 gap-0 px-4" dropdownClasses="w-full mt-3">
           <template v-slot:selected-option>
               <div class="flex items-center gap-2">
                   <span>+966</span>
                   <img class="w-6" src="~/assets/saudi-flag.svg" alt="">
               </div>
           </template>
           <template v-slot:options>
               <div class="gap-2 flex items-center cursor-pointer bg-primary-800 text-white p-4 hover:bg-primary-800 hover:text-white">
                   <span>+966</span>
                   <img class="w-6" src="~/assets/saudi-flag.svg" alt="">
                   <fa-icon class="mr-auto" :icon="['fas', 'check']" />
               </div>
    
               <div class="gap-2 flex items-center cursor-pointer p-4 hover:bg-primary-800 hover:text-white">
                   <span>+966</span>
                   <img class="w-6" src="~/assets/emirates-flag.svg" alt="" />
               </div>
           </template>
       </UiSelect>
    </div>
</template>