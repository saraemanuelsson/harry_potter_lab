import React from "react";

const CharacterList = (props) => {
    const options = props.students.map(student => {
    return <option value={student.name} key={student.name} onClick={handleChange}>{student.name}</option>
    })

    function handleChange(event){
        props.onStudentSelected(event.target.value)
    }

    return (
        <ul id="character-list" defaultValue="default" >
            {options}
        </ul>
    )

}

export default CharacterList;