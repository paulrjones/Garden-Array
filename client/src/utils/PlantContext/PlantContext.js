import { createContext } from 'react';

const PlantContext = createContext({
    plants: [],
    result: '',
    searchPlant: '',
    searchedPlant: '',
    sortBy: '',
    completeData: true,
    name: '',
    isInfo: false,
    currentPlant: {},
    plantTitle: '',
    handleSelectInputchange: () => { },
    handlePlantInputChange: () => { },
    handleSearchPlant: () => { },
    handlePlantInfo: () => { },
    handleToggleInfo: () => { },
    handleSavePlant: () => { }
});

export default PlantContext;
