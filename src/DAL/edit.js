import { invokeApi } from "../Utils/InvokeApi";

export const updateNewSubProducts = async (id, data) => {
  const reqObj = {
    path: `/sub-products/update/${id}`,
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const updateFaq = async (id, data) => {
  const reqObj = {
    path: `/faqs/update/${id}`,
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const updateWhyNewProducts = async (id, data) => {
  const reqObj = {
    path: `/WhyProducts/update/${id}`,
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
//////////////////////////////////////////////
export const updateProductsCategory = async (id, data) => {
  const reqObj = {
    path: `/Productscategory/update/${id}`,
    method: "PUT",
    headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const updateProducts = async (id, data) => {
  const reqObj = {
    path: `/api/products/${id}`,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const updatePortfolio = async (id, data) => {
  const reqObj = {
    path: `/portfolio/update/${id}`,
    method: "PUT",
    headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const updateSuccessStories = async (id, data) => {
  const reqObj = {
    path: `/successstories/update/${id}`,
    method: "PUT",
    headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
    postData: data,
  };
  return invokeApi(reqObj);
};
//////////////////////////////////////////////
export const updateusertype = async (id, data) => {
  const reqObj = {
    path: `/usertype/update/${id}`,
    method: "PUT",
    headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const updateuser = async (id, data) => {
  const reqObj = {
    path: `/admin/users/${id}`,
    method: "PUT",
    headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
    postData: data,
  };
  return invokeApi(reqObj);
};

export const updateSubProducts = async (data) => {
  const reqObj = {
    path: `/Products/subdata/update`,
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const updateProcess = async (data) => {
  const reqObj = {
    path: `/Products/process/update`,
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const updateBenifit = async (data) => {
  const reqObj = {
    path: `/Products/benifit/update`,
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const updatePrice = async (data) => {
  const reqObj = {
    path: `/Products/pricing/update/`,
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};

export const updateRole = async (id, data) => {
  const reqObj = {
    path: `/role/update/${id}`,
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};

export const updateComment = async (data) => {
  const reqObj = {
    path: `/comment/approve`,
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
/////////////// Update Artist //////////////
export const updateArtist = async (id, data) => {
  const reqObj = {
    path: `/api/artist/${id}`,
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
