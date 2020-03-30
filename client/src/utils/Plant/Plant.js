import axios from 'axios'

const User = {
  getPlants: (category, plant) => axios.get(`/api/plants/${category}/${plant}`,),
}

export default User