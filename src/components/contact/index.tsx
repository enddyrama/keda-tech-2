import { Col, Container, Row } from "react-bootstrap";
import SvgContact from "../../assets/svg/contact";

const SectionContact = () => {
    return (
        <div style={{ background: `linear-gradient(180deg, #7E64B4 0%, #221B33 100%)` }}>
            <Container style={{ color: "#C5C5C5" }}>
                <section id="contact" style={{ display: "flex", height: 714 }}>
                    <Row className="d-flex" style={{ flex: 1 }}>
                        <Col className="d-flex justify-content-center align-items-center">
                            <SvgContact />
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center flex-column">
                            <h1 className="text-center">Hubungi Kami</h1>
                            <p>test@gmail.com</p>
                        </Col>

                    </Row>
                </section>
            </Container>
        </div>
    )
};

export default SectionContact;