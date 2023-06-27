import axios from 'axios';
// import Store from './Redux/Store/Store';

// const axiosInstance = axios.create();

// const getTokens = () => {
//   const state = Store.getState();
//   const userToken = state.user.token;
//   const adminToken = state.admin.token;
//   return { userToken, adminToken };
// };

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const { userToken, adminToken } = getTokens();

//     if (userToken && typeof userToken === 'string' && userToken.trim()) {
//       config.headers['Authorization'] = `Bearer ${userToken.trim()}`;
//     }

//     if (adminToken && typeof adminToken === 'string' && adminToken.trim()) {
//       config.headers['Admin-Authorization'] = `Bearer ${adminToken.trim()}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;    

export const axiosInstance = axios.create({
    headers: {
        'authorization': `Bearer ${localStorage.getItem('jwtToken')}`
    }
})

export const adminAxiosInstance = axios.create({
    headers:{
        'authorization': `Bearer ${localStorage.getItem('admintoken')}`
    }
})
