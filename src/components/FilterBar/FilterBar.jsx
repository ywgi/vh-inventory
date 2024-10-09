import React from 'react';
import './FilterBar.css';

const FilterBar = (props) => {
    return(
        <div className="filter-bar">
            <select value={props.makeOption} onChange={props.handleMakeChange}>
                <option value="Make">Make</option> 
                {uniqueCarMakes.map(make => { return <option value={make}>{make}</option> })}
            </select>
            <select value={props.modelOption} onChange={props.handleModelChange}>
                <option value="Model">Model</option>
                {uniqueCarModels.map(model => { return <option value={model}>{model}</option> })}
            </select>
            <select value={props.yearOption} onChange={props.handleYearChange}>
                <option value="Year">Year</option>
                {uniqueCarYears.map(year => { return <option value={year}>{year}</option> })}
            </select>
            <select value={props.sortOption} onChange={props.handleSortChange}>
                <option value="Sort">Sort</option>
                <option value="Price">Price</option>
                <option value="Milage">Model</option>
                <option value="Days on lot">Days on Lot</option>
            </select>
        </div>
    );
}

export default FilterBar;