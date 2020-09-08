import axios from 'axios'
import { config } from "../../constants";
import { AlertService } from "../service/AlertService"
import get from 'lodash/get';
import set from 'lodash/set';
import qs from 'qs';
import { AuthenticationService } from "../service/AuthenticationService"

//API Rest principal de nuestra aplicacion
//En esta api rest se injecta el JWT y el error interceptor
const restAPI = axios.create({
    baseURL: config.url.API_BASE_URL
})



restAPI.interceptors.request.use((config) => {
    // obtengo el usuario en el localStorage
    let currentUser = AuthenticationService.currentUser();

    console.log(currentUser);
    if (currentUser && currentUser.token) {
        set(config, 'headers.token', currentUser.token);
    }
    return config;
});

// Error Interceptor!(y 401)
restAPI.interceptors.response.use(function (response) {

    return response;
}, function (error) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error);

    //Tiro Cartelito
    AlertService.error(error.response.data.message === '' ? error.response.data.error : error.response.data.message);

    if (401 === error.response.status) {

        // auto logout if 401 response returned from api
        if (this.authenticationService.currentUserValue) {
            this.authenticationService.logout();
            window.location.reload(true);
        }
        window.location = '/login';
    } else {

        return Promise.reject(error);
    }
});

export { restAPI }