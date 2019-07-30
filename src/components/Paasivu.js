import React, {Component} from 'react';
import {getAll} from "../Serviceclient";
import Header from "./Header";
import Uutiset from "./Uutiset";
import Navigointi from "./Navigointi";
import Frisbeet from "./Frisbeet";


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
            <div className="container">
                <Navigointi/>
                <Header/>
                <Uutiset/>
                <Frisbeet frisbeet={this.state.discs}/>
            </div>
        );
    }
}

export default Paasivu;