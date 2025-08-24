import Cookies from "js-cookie";

export const validateToken = () => {
  const token = Cookies.get("token");
  if (!token) return false; // ไม่มี token

  try {
    // แยก payload
    const payloadBase64 = token.split(".")[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));

    // JWT exp เป็นวินาที → แปลงเป็น ms
    const expiry = decodedPayload.exp * 1000;
    const now = Date.now();

    if (now > expiry) {
      console.warn("Token expired");
      return false;
    }

    return true; // ยังไม่หมดอายุ
  } catch (error) {
    console.error("Invalid token:", error);
    return false;
  }
};
