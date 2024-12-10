<template>
    <div class="bg-white p-8 text-agray-300 flex flex-col gap-8 animate__animated animate__slideInDown">
        <div>
            <span class="text-xl font-bold">
                ملاحاظات العميل
            </span>
            <div class="p-8 bg-agray-200 mt-8 font-bold"> {{ details.note }} </div>
        </div>
        
        <!-- client's details ///////////// -->
        <hr class="border-agray-400">
        <div>
            <span class="text-xl font-bold">
                تفاصيل العميل
            </span>
            <div class="mt-8 flex items-center justify-evenly">
                <div class="flex flex-col gap-2">
                    <span class="text-aprimary-600">الإسم</span>
                    <span>{{ details.client.name }}</span>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-aprimary-600">العنوان</span>
                    <span>{{ details.client.address }}</span>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-aprimary-600">حالة الشحنة</span>
                    <span>{{ details.client.package_status }}</span>
                </div>
            </div>
        </div>

        <!-- products' details ///////////// -->
        <hr class="border-agray-400">
        <div>
            <span class="text-xl font-bold">
                المنتجات
            </span>
            <div v-for="product in details.products" class="mt-8 grid grid-cols-5 pr-14">
                <div class="flex flex-col gap-2">
                    <span class="text-aprimary-600">كود المنتج</span>
                    <span>{{ product.code }}</span>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-aprimary-600">الاسم</span>
                    <span>{{ product.name }}</span>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-aprimary-600">الكمية</span>
                    <span>{{ product.quantity }}</span>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-aprimary-600">السعر</span>
                    <span>{{ product.price }}</span>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-aprimary-600">المجموع</span>
                    <span>{{ product.total }}</span>
                </div>
            </div>
        </div>

        <!-- invoice details -->
        <hr class="border-agray-400">
        <div>
            <span class="text-xl font-bold">
                مبلغ الفاتورة
            </span>
            <div class="mt-8 grid grid-cols-6 pr-14">
                <div class="flex flex-col gap-2">
                    <span class="text-aprimary-600">قيمة المنتجات بدون  الضريبة المضافة</span>
                    <span>{{ details.invoice.untaxed_price }}</span>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-aprimary-600">التوصيل</span>
                    <span>{{ details.invoice.shipping }}</span>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-aprimary-600">دفع عند التوصيل</span>
                    <span>{{ details.invoice.pov }}</span>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-aprimary-600">ضريبة القيمة المضاف (15%)</span>
                    <span>{{ details.invoice.vat }}</span>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-aprimary-600">القيمة الإجمالية شاملة ض.ق.م</span>
                    <span>{{ details.invoice.total_value }}</span>
                </div>
                <div class="flex flex-col gap-2 text-aprimary-600">
                    <span>المجموع الكلي</span>
                    <span>{{ details.invoice.final_price }}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const details = {
    note: 'يتم تعديل حجم هذا المستطيل بحسب النص ويظهر عباره لايوجد ملاحظات في حال لم يكتب العميل اي ملاحظه',
    client:{
        name: 'Sara',
        address: 'الرياض ، اليرموك ، شارع الخندق',
        package_status: 'N/A',
    },
    products:[
        {
            code: 'Z.3.156607307917577749',
            name: 'هايبر اكس 12-cloud stinger - test 2.2 شهر -تست 4',
            quantity: 1,
            price: 270.25,
            total: ' 270.25 SAR',
        },
        {
            code: 'Z.3.15660706990946028',
            name: 'لوجيتيك جي 933',
            quantity: 1,
            price: 1092.24,
            total: '1092.24 SAR',
        }
    ],
    invoice:{
        untaxed_price: 'SAR 1187.77',
        shipping: 'SAR 25.00',
        pov: 'SAR 10.00', // payment on delievry
        vat: 'SAR 182.97', // value added tax 
        total_value: 'SAR 1367.74',
        final_price: 'SAR  1402.74', 
    }
}
</script>