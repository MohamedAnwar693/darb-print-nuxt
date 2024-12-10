const baseUrl = 'http://127.0.0.1:8000/api'

export const orderList = async () => {
    const storeId = "1";
    const url = new URL(`${baseUrl}/admin/orderlist`);
    url.searchParams.append('store_id', storeId);  // Append store_id as query parameter

    const data = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const json = await data.json();
    console.log(json);
};


export const DeleteOrder = async (data) => {
    const storeId = "1";
    const url = new URL(`${baseUrl}/admin/deleteorder`);
    url.searchParams.append('store_id', storeId);
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Error delete order:', error);
        throw error;
    }
};

export const OrderDetail = async (data) => {
    const storeId = "1";
    const orderId = data.order_id;
    const url = new URL(`${baseUrl}/admin/order-detail`);
    url.searchParams.append('store_id', storeId);
    url.searchParams.append('order_id', orderId);
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
        console.error('Error Get Order Details:', error);
        throw error;
    }
};

export const OrderCancel = async (data) => {
    const storeId = "1";
    const url = new URL(`${baseUrl}/admin/order-cancel`);
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
        console.error('Error cancel Order :', error);
        throw error;
    }
};