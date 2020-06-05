import axios from "axios";
import qs from "qs";

const service = axios.create({
	base: "/",
	timeout: 5000
})

service.interceptors.request.use(
    config => {
		return config;
	},
	error => Promise.reject(error)
);

service.interceptors.response.use(
    response => {
		return response.data;
	},
	error => {
		return error.response;
	}
)

export default service;