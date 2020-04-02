import axios from 'axios'

const Plant = {
  getPlants: (category, plant) => axios.get(`/api/plants/${category}/${plant}`,),
}

export default Plant