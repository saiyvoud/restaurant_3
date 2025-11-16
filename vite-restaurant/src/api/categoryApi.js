import axios from "axios"
import apiPath from "./apiPath"
import Cookies from "js-cookie"
export const getCategoryApi = async () => {
    try {

        const response = await axios.get(apiPath.getCategory);
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
}
export const addCategoryApi = async (formData) => {
    try {
        const token = Cookies.get("token");
        const response = await axios.post(apiPath.addCategory, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            }
        });   
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
};
export const updateCategoryApi = async (formData) => {
    try {
        const token = Cookies.get("token");
        const response = await axios.put(apiPath.updateCategory + formData.id, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
};
export const deleteCategoryApi = async ({ id }) => {
    try {
        const token = Cookies.get("token");
        const response = await axios.delete(apiPath.deleteCategory + id, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
};