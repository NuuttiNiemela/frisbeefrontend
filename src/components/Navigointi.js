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
                        <Navbar.Brand className="nav-link" to="/" exact activeClassName="active">Logo</Navbar.Brand>
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" to="/" exact activeClassName="active">Main</NavLink>
                            <NavLink className="nav-link" to="/Frisbeet" activeClassName="active" >Discs</NavLink>
                            <NavLink className="nav-link" to="/Kentat" activeClassName="active" >Tracks</NavLink>
                            <NavLink className="nav-link"  to="/OmatSivut" activeClassName="active">My Pages</NavLink>
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