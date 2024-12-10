const baseUrl = 'http://127.0.0.1:8000/api';

export const product = async () => {
    const storeId = "1";
    const url = new URL(`${baseUrl}/admin/productlit`);
    url.searchParams.append('store_id', storeId);
    try {
      const data = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await data.json();
      return json; // Return the fetched data/
    } catch (error) {
      console.error(error);
      return [];
    }
};

export const CreateProduct = async () => {
    const storeId = "1";
    const url = new URL(`${baseUrl}/admin/createproduct`);
    url.searchParams.append('store_id', storeId);
    try{
        const data = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await data.json();
        return json;
    } catch(error) {
        console.error(error);
        return [];
    }
};
  
export const AddProduct = async (data) => {
    const storeId = "1";
    const url = new URL(`${baseUrl}/admin/addproduct`);
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
        console.error('Error creating product:', error);
        throw error;
    }
};
