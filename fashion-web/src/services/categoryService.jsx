import axiosClient from "./axiosClient";

//GET CATEGORY
export const getAllCategory = () => {
    return axiosClient.get("/categories");
};

//GET CATEGORY BY ID
export const getCategoryByID = (id) => {
    return axiosClient.get(`/categories/${id}`);
};
