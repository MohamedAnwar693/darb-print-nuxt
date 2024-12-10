<template>
    <div class="border-t-2 w-full lg:flex text-right py-8 items-center">
      <div>
        <h2 class="links-section-title">كروت شخصية</h2>
        <div class="flex flex-col lg:flex-row mt-4 lg:mt-0 lg:gap-32">
          <ul class="links-ul">
            <li>كرت شخصي ستاندر</li>
            <li>كرت بريستول</li>
            <li>كرت مقمش</li>
            <li>كرت بلاستيك</li>
            <li>كرت مربع بزوايا دائرية</li>
          </ul>
          <ul class="links-ul">
            <li>كروت داي كت زاوية</li>
            <li>كرت مقمش</li>
            <li>كروت بزوايا دائرية</li>
            <li>كروت داي كت زاويتين</li>
          </ul>
        </div>
      </div>

      <div class="flex-1 p-8 lg:p-32"></div>
      <div class="grid lg:grid-cols-3 gap-4">
        <div class="card border border-smooky-150 bg-smooky-100 ">
          <img src="~/assets/images/cards-3.png" class="w-full" alt="">
          <div class="py-4 text-center flex flex-col">
            <span>كروت بزوايا دائرية</span>
            <span class="font-bold">200 ر.س</span>
          </div>
        </div>

        <div class="card border border-smooky-150 bg-smooky-100 ">
          <img src="~/assets/images/cards-2.png" class="w-full" alt="">
          <div class="py-4 text-center flex flex-col">
            <span>كروت داي كت زاوية</span>
            <span class="font-bold">200 ر.س</span>
          </div>
        </div>

        <div class="card border border-smooky-150 bg-smooky-100 ">
          <img src="~/assets/images/cards-1.png" class="w-full" alt="">
          <div class="py-4 text-center flex flex-col">
            <span>كروت داي كت زاويتين</span>
            <span class="font-bold">200 ر.س</span>
          </div>
        </div>
      </div>            
    </div>
</template>