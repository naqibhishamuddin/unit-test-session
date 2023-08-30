import CryptoJS from "crypto-js";
const secretPass = "XkhZG4fW2t2W";

export const getEncryptedMessage = () => {
    const data = CryptoJS.AES.encrypt(
        JSON.stringify("Hello"),
        secretPass
    ).toString();
    return data
}

