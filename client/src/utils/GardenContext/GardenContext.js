import {createContext} from 'react'

const GardenContext = createContext({
  garden: {},
  garden_name: '',
  about: '',
  location: '',
  my_garden: '',
  handleGardenInputChange: () => {},
  handleCreateGarden: () => {},
  handleGetAllGardens: () => {}
}) 

export default GardenContext;