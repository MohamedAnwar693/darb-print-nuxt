<template>
    <div dir="rtl" class="flex flex-col min-h-screen body-font">
      <UiLoadingBar />
      <LayoutDefaultHeader />
      <slot class="flex-1" />
      <LayoutDefaultFooter />
    </div>
</template>

<style>
/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-primary-800;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-primary-700;
}
</style>