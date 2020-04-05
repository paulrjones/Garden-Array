import axios from 'axios'

const Plant = {
  getPlants: (category, plant) => axios.get(`/api/plants/${category}/${plant}`),
  getPlantInfoPage: (id) => axios.get(`/api/plantinfo/${id}`)
}

export default Plant