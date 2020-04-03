import axios from 'axios'

const Garden = {
  create: gardens => axios.post('/api/gardens', gardens),
  getGardens: gardens => axios.get('/api/gardens'),
  delete: id => axios.delete(`/api/gardens/${id}`)
}

export default Garden