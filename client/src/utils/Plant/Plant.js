import axios from 'axios'

const User = {
  getPlants: (category, plant) => axios.get(`/api/plants/${category}/${plant}`,),
  getPlant: (id) => axios.get(`/api/plants/${id}`,)
}

export default User