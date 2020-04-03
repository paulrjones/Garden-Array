import axios from 'axios'

const Plant = {
  getPlants: (category, plant) => axios.get(`/api/plants/${category}/${plant}`,),
  getPlant: (id) => axios.get(`/api/plants/${id}`,)
}

export default Plant