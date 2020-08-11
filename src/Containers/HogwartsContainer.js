import React from 'react'
import CharacterList from "../Components/CharacterList";
import Character from "../Components/Character";
import HouseFilter from "../Components/HouseFilter";

class HogwartsContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            students: [],
            selectedStudentName: ""
        };
        this.handleStudentSelected = this.handleStudentSelected.bind(this);
    }
    componentDidMount(){
        const url = 'http://hp-api.herokuapp.com/api/characters/students'

        fetch(url)
        .then(res => res.json())
        .then(students => this.setState({students: students}))
        .catch(err => console.error)
    }

    handleStudentSelected(name) {
        this.setState({ selectedStudentName: name })
    };

    render(){
        const selectedStudent = this.state.students.find(student => {
            return student.name === this.state.selectedStudentName
        })

        const houses = [];
        for (const student of this.state.students) {
            if (!houses.includes(student.house)) {
                houses.push(student.house)
            }
        }

        return (
            <div>
                <h2>Hogwarts Students</h2>
                <HouseFilter houses={ houses } />
                <CharacterList students={this.state.students} onStudentSelected={this.handleStudentSelected} />
                <Character student={selectedStudent}/>
            </div>

        )
    }
}

export default HogwartsContainer;