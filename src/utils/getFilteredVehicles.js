const getFilteredVehicles = (vehicles, status, makeOption, modelOption, yearOption) => {
    let vehicleList = vehicles;

    if (status === "used") {
        vehicles = vehicles.filter(vehicle => vehicle.state_of_vehicle === 'Used');
    }

    if (makeOption !== "Make") {
        vehicles = vehicles.filter(vehicle => vehicle.make === makeOption);
    }

    if (modelOption !== "Model") {
        vehicles = vehicles.filter(vehicle => vehicle.model === modelOption);
    }

    if (yearOption !== "Year") {
        vehicles = vehicles.filter(vehicle => vehicle.year === yearOption);
    }

    return vehicleList;
}

export default getFilteredVehicles;