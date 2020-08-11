import React from 'react';

const HouseFilter = (props) => {
    if (!props.houses) return null;
    const options = props.houses.map(house => {
    return <option value={house} key={house}>{house}</option>
    })

    return (
        <select id="house-selector" defaultValue="default">
            <option disabled value="default">Filter by House</option>
            { options }
        </select>
    )
}

export default HouseFilter;