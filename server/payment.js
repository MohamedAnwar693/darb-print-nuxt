const baseUrl = 'http://127.0.0.1:8000/api'

export const StripePayment = async (data) => {
    const storeId = "1";
    const url = new URL(`${baseUrl}/admin/stripe-payment`);
    url.searchParams.append('store_id', storeId);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Error payment:', error);
        throw error;
    }
};

export const GetStripePayment = async () => {
    const storeId = "1";
    const url = new URL(`${baseUrl}/admin/get-stripe-payment`);
    url.searchParams.append('store_id', storeId);
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
        console.error('Error payment:', error);
        throw error;
    }
};