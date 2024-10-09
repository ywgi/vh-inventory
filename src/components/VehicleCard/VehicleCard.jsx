import React, { useState, useEffect } from 'react';

const VehicleCard = ({ vehicle }) => {
    return(
        <p className='para'>{vehicle.vin}</p>
    );
}

export default VehicleCard;