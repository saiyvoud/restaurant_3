import Cookies from "js-cookie";
export const SaveToken = (token, refreshToken) => {
    Cookies.set("token", token, {
        expires: 1,
        sameSite: "strict",
    });
    Cookies.set("refreshToken", refreshToken, {
        expires: 1,
        sameSite: "strict",
    });

    const savedToken = Cookies.get("token");
    const savedRefreshToken = Cookies.get("refreshToken");

    console.log("Saved AccessToken:", savedToken);
    console.log("Saved RefreshToken:", savedRefreshToken);
}