const baseUrl = 'http://127.0.0.1:8000/api'

export const DeliveryHome = async () => {
    const storeId = "1";
    const url = new URL(`${baseUrl}/admin/Home`);
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
        console.error('Error delivery:', error);
        throw error;
    }
};

export const DeliveryBoyOrderList = async () => {
    const storeId = "1";
    const url = new URL(`${baseUrl}/admin/delivery-order-list`);
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
        console.error('Error delivery:', error);
        throw error;
    }
};

export const DeliveryTransaction = async () => {
    const storeId = "1";
    const url = new URL(`${baseUrl}/admin/delivery-transaction`);
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
        console.error('Error delivery:', error);
        throw error;
    }
};