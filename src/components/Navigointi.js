import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Nav';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import {NavLink, Route, Redirect} from "react-router-dom";



class Navigointi extends Component {

    state = {haku: ''}


    change = (kr) => {this.setState({haku:kr.target.value})}

    haku = (h) => {
        h.preventDefault()
        this.props.haku(this.state.haku)

        // this.setState({haku: ''})
    }

    render() {


        return (

                <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand activeclassname="active" className="nav-link" to="/">Logo</Navbar.Brand>
                        <Nav className="mr-auto">
                            <NavLink exact activeclassname="active" className="nav-link" to="/">Main</NavLink>
                            <NavLink activeclassname="active"  className="nav-link" to="/Frisbeet">Discs</NavLink>
                            <NavLink activeclassname="active"  className="nav-link" to="/Kentat">Tracks</NavLink>
                        </Nav>
                        <Form inline>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" value={this.state.haku} onChange={this.change}/>
                            <Button variant="outline-info" type="submit" onClick={this.haku} >Search</Button>
                        </Form>
                    </Navbar>
                    <br />

                </div>


        );
    }
}

export default Navigointi;