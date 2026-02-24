import axiosClient from "./axiosClient";

export const getReviewByProductId = async (productId) => {
    return await axiosClient.get(`/reviews?productId =${productId}`);
}