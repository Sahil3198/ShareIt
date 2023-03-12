export const host = process.env.REACT_APP_BASEURL;
export const sendMessageRoute = `${host}/chat/add`;
export const recieveMessageRoute = `${host}/chat/get`;
export const deleteMessageRoute = `${host}/chat/delete`;
export const allUsers = `${host}/chat/getUsers`;
export const getUserHistory = `${host}/chat/getHistory`;
export const addUserHistory = `${host}/chat/addUsersHistory`;
export const paymentAPI = `${host}/payment/initiate`;
export const paymentStatusApi = `${host}/payment/status`;
export const getPaymentStatusApi = `${host}/payment/status`;
export const publicKey = `${host}/payment/publicKey`;

