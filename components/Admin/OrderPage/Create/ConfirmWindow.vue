<template>
    <div>
        <h2 class="font-bold text-lg lg:text-xl text-aprimary-600">
            تأكيد الطلب
        </h2>
        <div class="grid lg:grid-cols-2 gap-8 my-8">
            <label class="flex flex-col gap-4 lg:col-span-2">
                <span class="text-black font-bold lg:text-lg">المنتجات</span>
                <UiAdminTextarea class="border-2" style="height: 200px;"/>
            </label>

            <label class="flex flex-col gap-4">
                <span class="text-black font-bold lg:text-lg">ملاحظات حول الطلب</span>
                <UiAdminTextarea class="border-2" style="height: 200px;" placeholder="اكتب ملاحظاتك هنا" />
            </label>

            <label class="flex flex-col gap-4 text-sm">
                <span class="text-black font-bold lg:text-lg">ملخص الفاتورة</span>
                <div class="border-2 flex flex-col gap-8 p-8">
                    <div class="flex items-center justify-between gap-2">
                        <span>قيمة المنتجة بدون القيمة المضافة</span>
                        <span>SAR  120.00</span>
                    </div>
                    <div class="flex items-center justify-between gap-2">
                        <span>التوصيل</span>
                        <span>SAR  25.00</span>
                    </div>
                    <div class="flex items-center justify-between gap-2">
                        <span>دفع عند التوصيل</span>
                        <span>SAR  10.00</span>
                    </div>
                    <div class="flex items-center justify-between gap-2">
                        <span>ضريبة القيمة المضافة 15 %</span>
                        <span>SAR  10.00</span>
                    </div>
                    <div class="flex items-center justify-between gap-2">
                        <span>القيمة الإجمالية شاملة ض ق م </span>
                        <span>SAR  10.00</span>
                    </div>
                    <div class="flex items-center justify-between gap-2">
                        <span>المجموع الكلى</span>
                        <span class="text-aprimary-600 font-bold">SAR  200.00</span>
                    </div>

                    <button class="text-aprimary-600 font-bold text-right">
                        اضافة خصم
                    </button>
                </div>
            </label>
        </div>
    </div>
</template>