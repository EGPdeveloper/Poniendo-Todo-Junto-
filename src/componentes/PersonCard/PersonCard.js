import React from "react";

class PersonCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    cumpleanios = () => {
        this.setState({age: this.state.age+1})
    }



    render() {
        const { lastName, firstName, age, hairColor} = this.props;

        return(
            <div className="container">
                <h4>{lastName}, {firstName}</h4>
                <p><b>Edad:</b> {this.state.age}</p>
                <p><b>Hair Color:</b> {hairColor}</p>
                <button className="btn btn-secondary" onClick={this.cumpleanios}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard;