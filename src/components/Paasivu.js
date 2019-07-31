import React, {Component} from 'react';
import {deleteId, getAll, postNew, updateId} from "../Serviceclient";
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

    lisays = (f) => {
        postNew(f)
            .then(() => {
                this.haeKaikki()
            })
    }

    muokkaus = (i, p) => {
        updateId(i, p)
            .then(() => {
                this.haeKaikki();
            })
    }

    poisto = (id) => {
        deleteId(id)
            .then(() => {
                this.haeKaikki()
            })
    }

    render() {
        return (
            <Router>
            <div className="container">

                <Navigointi/>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Uutiset}/>
                    <Route path="/Frisbeet" render={()=> (<Frisbeet frisbeet={this.state.discs} delete={this.props.poisto} update={this.props.muokkaus} add={this.props.lisays}/>)}/>
                    <Route path="/Kentat" component={Kentat}/>
                    <Route path="/OmatSivut" component={OmatSivut}/>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default Paasivu;