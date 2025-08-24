import axios from "axios"
import apiPath from "./apiPath"

export const LoginApi = async ({ email, password }) => {
    try {
        const data = {
            email: email,
            password: password
        }
        const response = await axios.post(apiPath.loginPath, data);
        console.log(response);
        return response;
    } catch (error) {
        return "";
    }
}