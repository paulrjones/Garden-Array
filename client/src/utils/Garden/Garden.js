import axios from 'axios'

const Garden = {
  create: gardens => axios.post('/api/gardens', gardens),
  getGardens: () => axios.get('/api/gardens'),
  delete: id => axios.delete(`/api/gardens/${id}`),
  getGardenByUser: (id) => axios.get(`/api/userplants/${id}`)
}

export default Garden