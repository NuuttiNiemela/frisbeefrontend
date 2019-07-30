import React, {Component} from 'react';
import {getAll} from "../Serviceclient";

class Paasivu extends Component {
    state = {discs: []}

    haeKaikki = () => {
        getAll()
            .then((response) => {
                this.setState({discs: response})
                console.log(this.state)
            })
    }

    componentDidMount = () => {
        this.haeKaikki()
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Paasivu;