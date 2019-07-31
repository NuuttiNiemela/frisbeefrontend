import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Nav';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';


class Navigointi extends Component {

    render() {
        return (

                <div>

                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand to="/" exact activeClassName="active">Logo</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link to="/Frisbeet" activeClassName="active">Discs</Nav.Link>
                            <Nav.Link to="/Kentat" activeClassName="active">Tracks</Nav.Link>
                            <Nav.Link to="/OmatSivut">My Pages</Nav.Link>
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