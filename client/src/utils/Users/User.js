import axios from 'axios'

const User = {
  createSession: books => axios.post('/users/login', books),
  createAccount: books => axios.post('/users/register', books),
  delete: id => axios.delete(`/api/books/${id}`)
}

export default User