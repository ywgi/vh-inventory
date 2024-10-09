import Vehicle from '../models/vehicle.model.js';
import extractVehicles from '../utils/extractVehicles.js';

const updateVehicles = async () => {
    const vehiclesArray = await extractVehicles();
    try{
        await Vehicle.insertMany(vehiclesArray, { ordered: false });
        console.log('All vehicles saved!');
    }
    catch (error) {
        console.error('Error saving vehicles: ', error);
    }
}

export default updateVehicles;