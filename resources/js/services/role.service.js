import axios from 'axios';
import authHeader from './auth-header';
axios.defaults.withCredentials = true

class RoleService {
    
    getRoles() {
        return axios
            .get('/api/role')
            .then((response) => {
                console.log('response');
                console.log(response);
                return response
            });
    }

    store(form) {
        return form
            .post("api/role")
            .then((response) => {
                console.log('response storeRole');
                console.log(response);
                return response
            })
    }

    update(form) {
        return form
            .put("api/role/" + form.id)
            .then((response) => {
                console.log('response updateRole');
                console.log(response);
                return response
            })
    }

    delete(id) {
        return axios
            .delete("api/role/" + id)
            .then((response) => {
                console.log('response deleteRole');
                console.log(response);
                return response
            })
    }
}

export default new RoleService();