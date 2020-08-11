import React from "react";

const Character = (props) => {
    if (!props.student)return null;
    return (
        <div>
            <h2>
            {props.student.name}
            </h2>
            <h3>{props.student.house}
            </h3>
        </div>
    )

}

export default Character;