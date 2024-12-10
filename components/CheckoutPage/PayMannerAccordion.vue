<template>
    <div class="accordion flex flex-col gap-8">
        <div class="accordion-card flex flex-col gap-4">
            <label class="accordion-card-head flex items-center gap-2">
                <input class="w-5 h-5" type="radio" name="pay-manner" v-model="selectedManner" value="card"/>
                <span>الدفع بإستخدام البطاقة</span>
                <div class="mr-auto flex flex-wrap items-center gap-4">
                    <img class="w-8 lg:w-16" src="~/assets/mada.png" alt=""/>
                    <img class="w-8 lg:w-16" src="~/assets/visa.png" alt=""/>
                    <img class="w-8 lg:w-16" src="~/assets/mcard.png" alt=""/>
                </div>
            </label>

            <div v-show="selectedManner == 'card'" class="accordion-card-body bg-smooky-100 p-4">
                <UiFormInput inputClass="bg-white" label="رقم البطاقة"/>
                <div class="lg:flex items-center gap-2 my-4">
                    <UiFormInput inputClass="bg-white" type="date" label="تاريخ انتهاء الصلاحية"/>
                    <UiFormInput inputClass="bg-white" type="number" label="cvv"/>
                </div>
                <UiOutlinedButton class="p-2 w-full mt-8">
                    <template v-slot:content>
                        <span>اضافة بطاقتي</span>
                    </template>
                </UiOutlinedButton>
            </div>
        </div>
   
        <div class="accordion-card flex flex-col gap-4">
            <label class="accordion-card-head flex items-center gap-2">
                <input class="w-5 h-5" type="radio" name="pay-manner" v-model="selectedManner" value="apple-pay"/>
                <span>الدفع Apple Pay</span>
                <div class="mr-auto flex items-center gap-4">
                    <img class="w-8 lg:w-16" src="~/assets/apple-pay.png" alt=""/>
                </div>
            </label>

            <div v-show="selectedManner == 'apple-pay'" class="accordion-card-body bg-smooky-100 p-4">
                
            </div>
        </div>

        <div class="accordion-card flex flex-col gap-4">
            <label class="accordion-card-head flex items-center gap-2">
                <input class="w-5 h-5" type="radio" name="pay-manner" v-model="selectedManner" value="cash"/>
                <span>الدفع نقداً</span>
                <div class="mr-auto flex items-center gap-4">
                    <div class="bg-green-600 text-white font-bold px-4 py-1">
                        Cash
                    </div>
                </div>
            </label>
            <div v-show="selectedManner == 'cash'" class="accordion-card-body bg-smooky-100 p-4">
            </div>
        </div>

        <div class="accordion-card flex flex-col gap-4">
            <label class="accordion-card-head flex items-center gap-2">
                <input class="w-5 h-5" type="radio" name="pay-manner" v-model="selectedManner" value="bank-transfer"/>
                <span>التحويل البنكي</span>
                <div class="mr-auto flex items-center gap-4">
                    <img class="w-8 lg:w-16" src="~/assets/bank-transfer.png" alt=""/>
                </div>
            </label>
            <div v-show="selectedManner == 'bank-transfer'" class="accordion-card-body bg-smooky-100 p-4">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            selectedManner: ''
        }
    }
}
</script>