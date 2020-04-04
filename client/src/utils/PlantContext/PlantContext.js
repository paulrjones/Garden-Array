import { createContext } from 'react';

const PlantContext = createContext({
    plants: [],
    result: '',
    searchPlant: '',
    searchedPlant: '',
    sortBy: '',
    name: '',
    isInfo: false,
    currentPlant: {},
    plantTitle: '',
    images:'',
    handleSelectInputchange: () => { },
    handlePlantInputChange: () => { },
    handleSearchPlant: () => { },
    handlePlantInfo: () => { },
    handleToggleInfo: () => { }
});

export default PlantContext;