import React, {Component} from 'react';
import {getByName, deleteId, getAll, postNew, updateId} from "../Serviceclient";
import Header from "./Header";
import Uutiset from "./Uutiset";
import Navigointi from "./Navigointi";
import Frisbeet from "./Frisbeet";
import Kentat from "./Kentat";
import Nav from "react-bootstrap/Nav";
import {NavLink, Switch, Route, Redirect} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import OmatSivut from "./OmatSivut";



class Paasivu extends Component {
    state = {discs: [], redirect: false}

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
    
    haeHakusanalla = (a) => {
        getByName(a)
            .then((response) =>  {
            this.setState({discs: response.data, redirect: true})
            console.log(this.state)

})
    }

renderRedirect = () => {
    if (this.state.redirect) {
        this.setState({redirect: false})
        return <Redirect to='/Frisbeet' />
    }
}

    render() {
        return (
            <Router>
            {this.renderRedirect()}
            <div className="container">

                <Navigointi haku={this.haeHakusanalla}/>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Uutiset}/>
                    <Route path="/Frisbeet" render={()=> (<Frisbeet frisbeet={this.state.discs} delete={this.poisto} update={this.muokkaus} add={this.lisays}/>)}/>
                    <Route path="/Kentat" component={Kentat}/>
                    <Route path="/OmatSivut" component={OmatSivut}/>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default Paasivu;