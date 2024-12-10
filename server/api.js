
const baseUrl = 'http://127.0.0.1:8000/api'

export const get = async () => {
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
