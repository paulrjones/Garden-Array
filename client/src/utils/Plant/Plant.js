import axios from 'axios'

const Plant = {
  getPlants: (category, plant, data) => axios.get(`/api/plants/${category}/${plant}/${data}`),
  getPlantInfoPage: (id) => axios.get(`/api/plantinfo/${id}`),
  savePlantToGarden: (gardenid, body) => axios.put(`/api/addplant/${gardenid}`, body),
}

export default Plant