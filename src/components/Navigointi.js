import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Nav';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import {NavLink} from "react-router-dom";



class Navigointi extends Component {

    render() {
        return (

                <div>

                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand activeclassname="active" className="nav-link" to="/">Logo</Navbar.Brand>
                        <Nav className="mr-auto">
                            <NavLink exact activeclassname="active" className="nav-link" to="/">Main</NavLink>
                            <NavLink activeclassname="active"  className="nav-link" to="/Frisbeet">Discs</NavLink>
                            <NavLink activeclassname="active"  className="nav-link" to="/Kentat">Tracks</NavLink>
                            <NavLink activeclassname="active" className="nav-link" to="/OmatSivut">My Pages</NavLink>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>

                    <br />
                </div>


        );
    }
}

export default Navigointi;