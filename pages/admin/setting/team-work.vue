<template>
    <LayoutAdminPageHeader title="فريق العمل"></LayoutAdminPageHeader>
    <div class="card-style-color p-4 text-agray-300  mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
        <div class="bg-white p-8 text-agray-300 mb-2 mt-4 flex flex-col gap-8 animate__animated animate__slideInDown">
            <span class="font-bold lg:text-xl px-4 mt-4">موظفي المتجر</span>
            <div class="mt-4 px-12">
                <button>
                    <img class="input-icon" src="../../../public/images/team-work-icon.png" alt=""/>
                    <span class="team-count">+  العدد حوالي 10</span>
                </button>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 mb-4 mt-2">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            اسم الموظف
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="الاسم"></UiAdminInput>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            رقم الجوال
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="9665XXXXXXXX"></UiAdminInput>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-12">
                <div class="flex flex-col gap-4 px-5">
                    <div>
                        <span class="font-bold lg:text-xl">
                            البريد الالكتروني
                        </span>
                    </div>
                    <div class="flex relative text-sm lg:text-base">
                        <UiAdminInput class="flex-1" placeholder="example@test.com"></UiAdminInput>
                    </div>
                </div>
                <div class="flex flex-col gap-4  mt-2">
                    <span class="px-5 font-bold text-lg">الحالة</span>
                    <div v-for="state in status" class="flex gap-4 items-center px-5">
                        <p class="flex flex-col">
                            <span class="text-lg">{{ state.name }}</span>
                        </p>
                        <div class="border-2 border-dashed rounded-xl border-indigo-600 mr-auto p-5">
                            <UiAdminToggler :active="state.active" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-2 mt-12 text-left ml-6 mr-8 mb-8">
                <UiAdminActionButton>
                    <template #content>
                        حفظ
                    </template>
                </UiAdminActionButton>
            </div>
        </div>
    </div>


</template>

<script setup>

definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - الإعدادات',})

const status = [
    {
        name: 'تفعيل/تعطيل',
        active: true,
    }
]

</script>

<style scoped>
.card-style-color{
    background: #DFE5EF;
}

.team-count{
    width: 100px;
    height: 96px;
    top: 1845px;
    left: 892px;
    gap: 0px;
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 38px 38px 38px 38px;
    opacity: 0px;
    color: white;
    font-size: large;
    background: #5D87FF;
}

.input-icon {
  position: absolute;
  height: 60px;
  right: 5px; /* Icon position */
  transform: translateY(-50%);
  font-size: 38px; /* Icon size */
  color: #888; /* Icon color */
  padding-top: 28px;
  padding-left: 45px;
  padding-right: 45px;
}
</style>
