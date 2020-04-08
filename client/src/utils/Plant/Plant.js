import axios from 'axios'

const Plant = {
  getPlants: (category, plant, data) => axios.get(`/api/plants/${category}/${plant}/${data}`),
  getPlantInfoPage: (id) => axios.get(`/api/plantinfo/${id}`),
  getSavedPlant: (gardenid) => axios.get(`/api/savedplant/${gardenid}`),
  savePlantToGarden: (gardenid, body) => axios.put(`/api/addplant/${gardenid}`, body),
  removePlant: (gardenid, index) => axios.put(`/api/deleteplant/${gardenid}/${index}`)
}

export default Plant