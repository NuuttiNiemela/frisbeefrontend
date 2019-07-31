import React, {Component} from 'react';
import {getAll} from "../Serviceclient";
import Header from "./Header";
import Uutiset from "./Uutiset";
import Navigointi from "./Navigointi";
import Frisbeet from "./Frisbeet";
import Kentat from "./Kentat";
import Nav from "react-bootstrap/Nav";
import {NavLink, Switch, Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import OmatSivut from "./OmatSivut";



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
            <Router>
            <div className="container">

                <Navigointi/>
                <Switch>
                <Header/>
                <Uutiset/>
                <Frisbeet frisbeet={this.state.discs}/>
                    <Route path="/frisbee" component={Frisbeet}/>
                    <Route path="/tracks" component={Kentat}/>
                    <Route path="/mypages" components={OmatSivut}/>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default Paasivu;