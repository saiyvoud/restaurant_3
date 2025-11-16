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
export const setTokenToCookie = (token, days = 7) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `token=${token}; ${expires}; path=/; Secure; SameSite=Strict`;
};