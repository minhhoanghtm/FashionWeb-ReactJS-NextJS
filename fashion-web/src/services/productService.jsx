import axiosClient from "./axiosClient";

//GET ALL PRODUCT
export const getAllProduct = () => {
    return axiosClient.get("/products");
};

//GET PRODUCT BY ID
export const getProductByID = (id) => {
    return axiosClient.get(`/products/${id}`);
};

//GET PRODUCT BY ID CATEGORY
export const getProductByCategory = (categoryId) => {
    return axiosClient.get(`/products?categoryId=${categoryId}`);
};

//GET PRODUCT BY SLUG
export const getProductBySlug = async (slug) => {
    // 1. Lấy product theo slug
    const productRes = await axiosClient.get(`/products?slug=${slug}`);
    const product = productRes.data[0];

    if (!product) return null;

    // 2. Lấy variant theo productId
    const variantRes = await axiosClient.get(
        `/product_variants?productId=${product.id}`
    );

    return {
        ...product,
        product_variants: variantRes.data
    };
};


//ADD PRODUCT
export const creatProduct = (data) => {
    return axiosClient.post("/products", data);
};

//DELETE PRODUCT
export const deleteProduct = (id) => {
    return axiosClient.delete(`/products/${id}`);
};

//EDIT PRODUCT
export const updateProduct = (id, data) => {
    return axiosClient.patch(`/products/${id}`, data);
};