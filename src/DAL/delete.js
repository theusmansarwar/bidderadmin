import { invokeApi } from "../Utils/InvokeApi";


export const deleteAllProducts = async (data) => {
  const reqObj = {
    path: `/api/products/delete-multiple`,
    method: "DELETE", // Ensure correct capitalization
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  
  return invokeApi(reqObj);
};
////////////////////////
export const deleteAllUsers = async (data) => {
  const reqObj = {
    path: `/api/auth/users/delete-multiple`,
    method: "POST", // Ensure correct capitalization
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  
  return invokeApi(reqObj);
};
export const deleteAllArtist = async (data) => {
  const reqObj = {
    path: `/api/artist/delete-multiple`,
    method: "DELETE", // Ensure correct capitalization
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  
  return invokeApi(reqObj);
};
export const deleteAllBidders = async (data) => {
  const reqObj = {
    path: `/api/bids/delete-multiple`,
    method: "DELETE", // Ensure correct capitalization
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  
  return invokeApi(reqObj);
};