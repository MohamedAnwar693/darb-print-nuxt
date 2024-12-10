<template>
    <div class="flex flex-col gap-8 bg-white text-agray-300 p-4">
        <LayoutAdminPageHeader title="أنشئ طلب جديد" sub-title="أنشئ طلبا لعملائك بدون تدخل منهم" />
        
        <div class="flex justify-center gap-4">
            <button 
            @click="currentStep = step.key"
            :class="[
                currentStep == step.key && 'current-step bg-aprimary-600 text-white',
                (step.completed && step.key !== currentStep) && 'completed-step',
                (!step.completed && step.key !== currentStep) && 'uncompleted-step',
                'whitespace-nowrap px-2 py-3 text-sm w-[180px]'
            ]" v-for="(step, index) in steps">
                <span class="hidden lg:block">{{ step.label }}</span>
                <span class="block lg:hidden">{{ index + 1 }}</span>
            </button>
        </div>

        <div class="grid lg:grid-cols-4">
            <!-- order form builder ////// -->
            <div class="p-1 lg:p-8 lg:col-span-3">
                <AdminOrderPageCreateGeneralInfoWindow v-if="currentStep == 'general_info'" />
                <AdminOrderPageCreateAddressWindow v-if="currentStep == 'address'" />
                <AdminOrderPageCreateShippingWindow v-if="currentStep == 'shipping'" />
                <AdminOrderPageCreatePaymentWindow v-if="currentStep == 'payment'" />
                <AdminOrderPageCreateConfirmWindow v-if="currentStep == 'confirmation'" />
            </div>
            
            <!-- review order ////// -->
            <div class="lg:border-r-2 my-8 lg:my-0 lg:px-4" v-if="currentStep !== 'general_info'">
                <AdminOrderPageCreateOrderReview />
            </div>
        </div>

        <div class="flex text-sm lg:text-base">
            <UiAdminActionButton @click="switchToStep('prev')" v-if="currentStep !== steps[0].key">
                <template #content>
                    <Icon size="1.3rem" name="ph:caret-right-bold" />
                    السابق
                </template>
            </UiAdminActionButton>

            <UiAdminActionButton @click="switchToStep('next')" class="mr-auto" v-if="currentStep !== steps[steps.length - 1].key">
                <template #content>
                    التالي
                    <Icon size="1.3rem" name="ph:caret-left-bold" />
                </template>
            </UiAdminActionButton>

            <UiAdminActionButton class="mr-auto" v-if="currentStep == steps[steps.length - 1].key">
                <template #content>
                    تأكيد الطلب
                    <Icon size="1.3rem" name="ph:caret-left-bold" />
                </template>
            </UiAdminActionButton>
        </div>
    </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
useHead({ title: 'لوحة التحكم - إنشاء طلب'})
const currentStep = ref('general_info')
const steps = [
    {
        label: 'المنتجات ومعلومات العميل',
        key: 'general_info',
        completed: false,
    },
    {
        label: 'عنوان العميل',
        key: 'address',
        completed: false,
    },
    {
        label: 'طريقة التوصيل',
        key: 'shipping',
        completed: false,
    },
    {
        label: 'طريقة الدفع',
        key: 'payment',
        completed: false,
    },
    {
        label: 'تأكيد الطلب',
        key: 'confirmation',
        completed: false
    },
]

/**
 * switch to a target step 
 * & set the target as current 
 * @param {string} target 
 */
const switchToStep = function(target){
    for (const [index, step] of steps.entries()) {
        if (step.key === currentStep.value) {
            // get the nex step based on user desire
            let newStep = steps[(target == 'next' ? (index + 1) : (index - 1))]
            currentStep.value = newStep.key;

            // set current step as completed if user is switching to next
            steps[index].completed = (target == 'next')
            
            break; 
        }
    }
}
</script>

<style scoped>
.current-step {
    @apply border-aprimary-600 border-2;
}
.completed-step{
    @apply bg-aprimary-600 text-white;
}
.uncompleted-step{
    @apply border-2 border-asmooky-200;
}
</style>