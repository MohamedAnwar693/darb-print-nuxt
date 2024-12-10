const baseUrl = 'http://127.0.0.1:8000/api';

export const ViewUsedCoupon = async (data) => {
    const storeId = "1";
    const couponId = data.coupon_id;
    const url = new URL(`${baseUrl}/admin/view-used-coupon`);
    url.searchParams.append('store_id', storeId);
    url.searchParams.append('coupon_id', couponId);
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Error Get Coupon:', error);
        throw error;
    }
};