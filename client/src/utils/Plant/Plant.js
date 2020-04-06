import axios from 'axios'

const Plant = {
  getPlants: (category, plant) => axios.get(`/api/plants/${category}/${plant}`),
  getPlantInfoPage: (id) => axios.get(`/api/plantinfo/${id}`),
  savePlantToGarden: (gardenid, body) => axios.put(`/addplant/${gardenid}`, body)
}

export default Plant