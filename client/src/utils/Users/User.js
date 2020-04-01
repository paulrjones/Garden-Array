import axios from 'axios'

const User = {
  login: users => axios.post('/api/users/login', users),
  getOneUser: username => axios.get(`/api/users/${username}`),
  register: users => axios.post('/api/users/register', users),
  delete: id => axios.delete(`/api/users/${id}`, { headers: {"Authorization": "Bearer " + (localStorage.getItem('jwt'))}})
}

export default User