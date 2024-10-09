import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
//import css and additional components
import './VehicleList.css'
import VehicleCard from '../VehicleCard/VehicleCard'
//import utility functions
import getFilteredVehicles from '../../utils/getFilteredVehicles.js';

const VehicleList = ({status}) => {
    const [vehicles, setVehicles] = useState([]);
    const [makeOption, setMakeOption] = useState("Make");
    const [modelOption, setModelOption] = useState("Model");
    const [yearOption, SetYearOption] = useState("Year");

    useEffect(() => {
        const getVehicleData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/vehicles');
                setVehicles(response.data);
            }
            catch (err) {
                console.error(err);
            }
        }

        getVehicleData();
    }, []);

    const filteredVehicles = useMemo(() => {
        return getFilteredVehicles(vehicles, status, makeOption, modelOption, yearOption);
    }, [vehicles, status, makeOption, modelOption, yearOption]);

    return(
        <div className='vehicle-list'>
            <ul>
                {filteredVehicles.map((vehicle) => (
                    <li key={vehicle.vin}>
                        <VehicleCard vehicle={vehicle}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VehicleList;