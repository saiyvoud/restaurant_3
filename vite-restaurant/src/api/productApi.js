import axios from "axios"
import apiPath from "./apiPath"
export const getProductApi = async () => {
    try {

        const response = await axios.get(apiPath.getProduct);
        console.log(response);
        return response;
    } catch (error) {
        return "";
    }
}