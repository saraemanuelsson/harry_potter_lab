import React from "react";

const CharacterSelector = (props) => {
    const options = props.students.map(student => {
    return <option value={student.name} key={student.name}>{student.name}</option>
    })

    function handleChange(event){
        props.onStudentSelected(event.target.value)
    }

    return (
        <select id="character-selector" defaultValue="default" onChange={handleChange}>
            <option disabled value="default">Choose a character...</option>
            {options}
        </select>
    )

}

export default CharacterSelector;