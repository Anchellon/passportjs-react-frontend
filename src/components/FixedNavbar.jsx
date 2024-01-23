import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FixedNavbar() {
    let loggedIn = false;
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link className="link" to="/">
                        My App
                    </Link>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home">Link 1</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Link 2</Nav.Link>
                    {/* <Nav.Link href="#features">Features</Nav.Link> */}
                    {!loggedIn && (
                        <Nav.Link href="#features">
                            <Link className="link" to="login">
                                Login
                            </Link>{" "}
                        </Nav.Link>
                    )}
                    {loggedIn && (
                        <NavDropdown title="{User}" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}
