import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import ModalAuth from "../modal";

const CustomHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <ModalAuth status={openModal} handleClose={() => setOpenModal(false)} />
            <Navbar
                expand="lg"
                sticky="top"
                className={scrolled ? "scrolled-navbar" : "not-scrolled-navbar"}
            >
                <Container>
                    <Navbar.Brand href="#home">Lorem Ipsum</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link className="navbar-link " href="#about">
                            About
                        </Nav.Link>
                        <Nav.Link className="navbar-link" href="#pricing">
                            Pricing
                        </Nav.Link>
                        <Nav.Link className="navbar-link" href="#contact">
                            Contact
                        </Nav.Link>
                        <Button
                            onClick={() => setOpenModal(!openModal)}
                            className="navbar-link" variant="outline-dark">
                            Login
                        </Button>
                    </Navbar.Collapse>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="navbar-link" href="#about">
                            About
                        </Nav.Link>
                        <Nav.Link className="navbar-link" href="#pricing">
                            Pricing
                        </Nav.Link>
                        <Nav.Link className="navbar-link" href="#contact">
                            Contact
                        </Nav.Link>
                        <Button className="navbar-link" variant="outline-dark">
                            Login
                        </Button>
                    </Nav>
                </Navbar.Collapse> */}
                </Container>
            </Navbar>
        </>
    );
};

export default CustomHeader;
