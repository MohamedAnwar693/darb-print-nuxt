<template>
  <div class="flex-1">
    <LandingPageBanner />
    <LandingPageBrands />
    <LandingPageProccess />
    <LandingPageServices />
    <LandingPagePopularItems />
    <LandingPagePersonalCards />
    <LandingPageAdBanner :imagesChunk="imagesChunk1">
      <template v-slot:title>
        <span>تجربة جديدة  كليا</span>
        <br /> 
        <span class="font-bold">في طباعة الهدايا الدعائية </span>
      </template>
      <template v-slot:button-content>
        اطلب الآن
      </template>
    </LandingPageAdBanner>
    <LandingPagePromotionalCards />
    <LandingPagePaperPrints />
    <LandingPageAdBanner dir="ltr" :imagesChunk="imagesChunk2">
      <template v-slot:title>
        <span class="font-bold">بدون حد ادنى للطلب </span>
      </template>
      <template v-slot:button-content>
        اطلب الآن
      </template>
    </LandingPageAdBanner>
    <LandingPagePackaging />
    <LandingPageLargePrints />
    <LandingPageCanvasPrints />
    <LandingPageAdBanner dir="ltr" :imagesChunk="imagesChunk3">
      <template v-slot:title>
        <span class="font-bold">
          <span>تجهيز كامل </span>
          <br>
          <span>لبوثات المعارض والفعاليات</span>
        </span>
      </template>
      <template v-slot:button-content>
        تواصل معنا
      </template>
    </LandingPageAdBanner>
    <LandingPageConferences />
    <LandingPageMadeByDarb />
    <LandingPageReadyItems />
    <LandingPageContactUs />

    <ScrollToTopButton />
  </div>
</template>

<script setup>
import imagesChunk1 from '~/assets/images/products-chunk.png'
import imagesChunk2 from '~/assets/images/products-chunk-2.png'
import imagesChunk3 from '~/assets/images/products-chunk-3.png'

useHead({
  title: 'الرئيسية',
})
</script>