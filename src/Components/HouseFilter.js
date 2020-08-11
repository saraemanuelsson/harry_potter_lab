import React from 'react';

const HouseFilter = (props) => {

    const options = props.houses.map(house => {
        return <option value={house} key={house}>{house}</option>
    });

    function handleChange(event) {
        props.onHouseSelected(event.target.value);
    };

    return (
        <select id="house-selector" defaultValue="default" onChange={handleChange}>
            <option disabled value="default">Filter by House</option>
            <option value="all" key="all">All</option>
            { options }
        </select>
    );
};

export default HouseFilter;