import {createContext} from 'react'

const GardenContext = createContext({
  garden: {},
  garden_name: '',
  about: '',
  location: '',
  my_garden: '',
  handleGardenInputChange: () => {},
  handleCreateGarden: () => {}
})

export default GardenContext;