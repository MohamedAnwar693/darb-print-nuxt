<template>
    <div class="border-t-2 w-full lg:flex text-right py-8 items-center">
      <div>
        <h2 class="links-section-title">الهدايا الدعائية</h2>
        <div class="flex flex-col lg:flex-row lg:gap-32 mt-4 lg:mt-0">
          <ul class="links-ul">
            <li>أفلام</li>
            <li>أكياس</li>
            <li>بروشات</li>
            <li>تي شيرت</li>
            <li>شريط تعليق</li>
          </ul>
          <ul class="links-ul">
            <li>كاب</li>
            <li>نوته</li>
            <li>زجاجات شرب</li>
            <li>حقائب</li>
          </ul>
        </div>
      </div>

      <div class="flex-1"></div>
      <div class="grid lg:grid-cols-3 gap-4 mt-6 lg:mt-0">
        <div class="hidden lg:block"></div>
        <div class="hidden lg:block"></div>
        <div class="card ">
          <div class="border border-smooky-150 bg-smooky-100 relative">
            <img src="~/assets/images/prints.png" class="w-full" alt="" />
          </div>
          <div class="py-4 flex flex-col font-bold">
            <span>
              هدايا دعائية
              <fa-icon class="mx-2" :icon="['fas', 'arrow-left']" />
            </span>
          </div>
        </div>
      </div>            
    </div>
</template>