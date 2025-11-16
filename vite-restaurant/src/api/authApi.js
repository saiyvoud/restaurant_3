import axios from "axios"
import apiPath from "./apiPath"
import {setTokenToCookie} from "../util/cookie"
export const LoginApi = async ({ email, password }) => {
    try {
        const data = {
            email: email,
            password: password
        }
        const response = await axios.post(apiPath.loginPath, data);
        if (response.data && response.data.token) {
            const token = response.data.token;
            setTokenToCookie(token); // ເກັບໃສ່ cookie
        }
        console.log(response);
        return response;
    } catch (error) {
        return "";
    }
}