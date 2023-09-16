import { Col, Container, Row } from "react-bootstrap";
import { LogoJumbotron } from "../../assets/svg";

const SectionHome = () => {
    return (
        <div style={{ background: `linear-gradient(180deg, #7E64B4 0%, #221B33 100%)` }}>
            <Container style={{ color: "#C5C5C5" }}>
                <section id="home" style={{ display: "flex", height: 714 }}>
                    <Row className="d-flex" style={{ flex: 1 }}>
                        <Col md={4} className="d-flex justify-content-center align-items-center">
                            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut laoreet massa</h1>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center">
                            <LogoJumbotron />
                        </Col>
                    </Row>
                </section>
            </Container>
        </div>
    )
};

export default SectionHome;