const Vehicle = require('../models/vehicle.model');

const deleteCollection = async () => {
  await Vehicle.collection.drop();
  console.log('Vehicles collection dropped');
}

export default deleteCollection;