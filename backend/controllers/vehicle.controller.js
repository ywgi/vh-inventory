import Vehicle from "../models/vehicle.model.js"

export const getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching vehicles' });
    }
}

export const updateVehicle = async (req, res) => {
    console.log('update vehicles.')
}





