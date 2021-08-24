import axios from '../src/index'


axios.
    get('https://api.github.com/search/users?q=aa')
    .then(res => {
        console.log(res)
    })

//   axios.request(config)
//   axios.get(url[, config])
//   axios.delete(url[, config])
//   axios.head(url[, config])
//   axios.options(url[, config])
//   axios.post(url[, data[, config]])
//   axios.put(url[, data[, config]])
//   axios.patch(url[, data[, config]])


//   const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });


//   // Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });