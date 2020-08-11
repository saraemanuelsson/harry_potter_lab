import React from 'react'
import CharacterList from "../Components/CharacterList";
import Character from "../Components/Character";
import HouseFilter from "../Components/HouseFilter";

class HogwartsContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            students: [],
            selectedStudentName: "",
            selectedHouse: ""
        };
        this.handleStudentSelected = this.handleStudentSelected.bind(this);
        this.handleHouseSelected = this.handleHouseSelected.bind(this);
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

    handleHouseSelected(house) {
        if (house === "all") {
            this.setState({ selectedHouse: ""})
        } else {
            this.setState({ selectedHouse: house })
        }
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

        let students = this.state.students;
        if (this.state.selectedHouse) {
            students = this.state.students.filter(student => student.house === this.state.selectedHouse)
        }

        return (
            <div>
                <h2>Hogwarts Students</h2>
                <HouseFilter houses={ houses } onHouseSelected={this.handleHouseSelected} />
                <CharacterList students={students} onStudentSelected={this.handleStudentSelected} />
                <Character student={selectedStudent}/>
            </div>

        )
    }
}

export default HogwartsContainer;