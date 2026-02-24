import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "applicstion/json",
    },  
});
export default axiosClient;
 //Tạo axios dùng chung cho toàn bộ project