import { invokeApi } from "../Utils/InvokeApi";

export const searchProducts = async (title) => {
  const reqObj = {
    path: `/products/search?title=${title}`,
    method: "GET",
    headers: {},

    body: {},
  };
  return invokeApi(reqObj);
};

export const fetchallProductslist = async (page, rowsPerPages, title) => {
  const reqObj = {
    path: `/api/products?title=${title}&limit=${rowsPerPages}&page=${page}&search=${
      title || ""
    }`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};

export const fetchActiveArtists = async (page, rowsPerPages, title) => {
  const reqObj = {
    path: `/api/artist/list`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchProductsbyid = async (id) => {
  const reqObj = {
    path: `/api/products/${id}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};
//////////////////////////////////////////////

export const fetchallUserlist = async (page, rowsPerPages) => {
  const reqObj = {
    path: `/api/bids/listbidders?limit=${rowsPerPages}&page=${page}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchallUserbyid = async (id) => {
  const reqObj = {
    path: `/admin/users/${id}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchregisteredUsers = async () => {
  const reqObj = {
    path: `/api/auth/users`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchArtists = async (page, rowsPerPage, searchQuery) => {
  const reqObj = {
    path: `/api/artist?search=${searchQuery}&limit=${rowsPerPage}&page=${page}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchArtistsbyid = async (id) => {
  const reqObj = {
    path: `/api/artist/${id}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchuserbyid = async (id) => {
  const reqObj = {
    path: `/api/users/${id}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};
