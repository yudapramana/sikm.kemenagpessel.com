import axios from 'axios';

class GuestService {
    get() {
        return axios
            .get('/api/guest')
            .then((response) => {
                console.log('response getGuests');
                console.log(response);
                return response
            });
    }

    store(form) {
        return form
            .post("api/guest")
            .then((response) => {
                console.log('response storeGuest');
                console.log(response);
                return response
            })
    }
}

export default new GuestService();