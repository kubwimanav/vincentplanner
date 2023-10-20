import axios from "axios";

const axiosClient= axios.create({
    baseURL: 'https://holiday-api-zj3a.onrender.com '
});
export default axiosClient