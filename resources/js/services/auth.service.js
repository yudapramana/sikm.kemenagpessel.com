import axios from 'axios';
axios.defaults.withCredentials = true

class AuthService {
  login(user) {
    return axios
      .post('/api/login', {
        email: user.username,
        password: user.password
      })
      .then(response => {
        console.log('response')
        console.log(response)
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post('/api/register', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();