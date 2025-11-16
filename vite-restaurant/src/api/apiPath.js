const baseUrl = "http://localhost:8000/api";
export default class apiPath {
    //------ auth ----
    static loginPath = `${baseUrl}/user/login`;
    // ---- category -----
    static addCategory = `${baseUrl}/category/create`;
    static getCategory = `${baseUrl}/category/selAll`;
    static updateCategory = `${baseUrl}/category/update/`;
    static deleteCategory = `${baseUrl}/category/delete/`;
    // ---- product -----
    static getProduct = `${baseUrl}/product/selAll`;
    static addProduct = `${baseUrl}/product/create`;
    static updateProduct = `${baseUrl}/product/update/`;
    static deleteProduct = `${baseUrl}/product/delete/`;
    static getProductByCategory = `${baseUrl}/product/selBy/`;
}