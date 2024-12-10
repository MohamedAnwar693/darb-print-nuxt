const baseUrl = 'http://127.0.0.1:8000/api'

export const UpdatePassword = async (data) => {
    const storeId = "1";
    const url = new URL(`${baseUrl}/admin/updatepassword`);
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
        console.error('Error password:', error);
        throw error;
    }
};