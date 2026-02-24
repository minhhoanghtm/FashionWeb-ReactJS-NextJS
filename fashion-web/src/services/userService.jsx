import axiosClient from "./axiosClient";

export const getAllUser = async() => {
    return await axiosClient.get("/users");
}