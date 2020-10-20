import Axios from "axios";
export default function(config) {
    let instance = Axios.create({
        baseURL: "http://152.136.185.210:8000/api/w6"
    });

    // Add a request interceptor
    instance.interceptors.request.use(
        function(config) {
            // Do something before request is sent
            return config;
        },
        function(error) {
            // Do something with request error
            return Promise.reject(error);
        }
    );
    instance.interceptors.response.use(
        function(response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response.data;
        },
        function(error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        }
    );
    return instance(config);
}