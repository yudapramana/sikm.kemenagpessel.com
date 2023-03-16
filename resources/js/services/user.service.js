import axios from 'axios';
import authHeader from './auth-header';
axios.defaults.withCredentials = true

class UserService {
    getUsers() {
        return axios
            .get('/api/user')
            .then((response) => {
                console.log('response getUsers');
                console.log(response);
                return response
            });
    }

    storeUser(form) {
        return form
            .post("api/user")
            .then((response) => {
                console.log('response storeUser');
                console.log(response);
                return response
            })
    }

    updateUser(form) {
        return form
            .put("api/user/" + form.id)
            .then((response) => {
                console.log('response updateUser');
                console.log(response);
                return response
            })
    }

    deleteUser(id) {
        return axios
            .delete("api/user/" + id)
            .then((response) => {
                console.log('response deleteUser');
                console.log(response);
                return response
            })
    }
}

export default new UserService();