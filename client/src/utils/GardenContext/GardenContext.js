import {createContext} from 'react'

const GardenContext = createContext({
  garden: {},
  garden_name: '',
  about: '',
  location: '',
  my_garden: '',
  handleInputChange: () => {}
})

export default GardenContext;