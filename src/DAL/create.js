import { invokeApi } from "../Utils/InvokeApi";

export const createnewuser = async (data) => {
  const reqObj = {
    path: "/admin/register",
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const createIndustries = async (data) => {
  const reqObj = {
    path: "/industry/add",
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const createCaseStudy = async (data) => {
  const reqObj = {
    path: "/casestudy/add",
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const createnewTeamCategory = async (data) => {

  const reqObj = {
    path: "/teamcategory/add",
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};

export const uploadimage = async (data) => {
  const reqObj = {
    path: "/upload-image",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const createNewWhyProducts = async (data) => {
  const reqObj = {
    path: "/WhyProducts/add",
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const createnewCategory = async (data) => {
  const reqObj = {
    path: "/category/add",
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
//////////////////////
export const createnewProductsCategory = async (data) => {
  const reqObj = {
    path: "/Productscategory/add",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    postData: data,
  };
  return invokeApi(reqObj);
};
/////////////////////
export const createNewProducts = async (data) => {
  const reqObj = {
    path: "/api/products/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    postData: data,
  };
  return invokeApi(reqObj);
};
export const createNewSubProducts = async (data) => {
  const reqObj = {
    path: "/sub-products/add",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    postData: data,
  };
  return invokeApi(reqObj);
};
export const createNewPortfolio = async (data) => {
  const reqObj = {
    path: "/portfolio/add",
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    postData: data,
  };
  return invokeApi(reqObj);
};
export const createNewHowwedo = async (data) => {
  const reqObj = {
    path: "/howwedo/create",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    postData: data,
  };
  return invokeApi(reqObj);
};
export const createNewSuccessStory = async (data) => {
  const reqObj = {
    path: "/successstories/add",
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    postData: data,
  };
  return invokeApi(reqObj);
};
export const createTestimonial = async (data) => {
  const reqObj = {
    path: "/testimonial/add",
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const createnewusertype = async (data) => {
  const reqObj = {
    path: "/usertype/add",
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};

//////////// Add Artist ////////// 
export const addArtist = async (data) => {
  const reqObj = {
    path: "/api/artist",
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};

