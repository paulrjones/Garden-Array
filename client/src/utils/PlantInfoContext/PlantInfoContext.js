import { createContext } from 'react';

const PlantInfoContext = createContext({
    common_name: '',
    scientific_name: '',
    family_common_name: '',
    duration: '',
    precipitation_max: '',
    precipitation_min: '',
    native_status: '',
    growth_habit: '',
    drought_tolerance: '',
    foliage_color: '',
    lifespan: '',
    mature_height: '',
    shade_tolerance: '',
    fruit_seed_color: '',
    bloom_period: '',
    growth_period: '',
    flower_color: '',
    handlePlantInfoSearch: () => {},
    handleRenderPlant: () => {}
});

export default PlantInfoContext;
