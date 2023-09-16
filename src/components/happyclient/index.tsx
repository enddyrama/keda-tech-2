import { Col, Container, Row } from "react-bootstrap";
import { SvgAbout } from "../../assets/svg";

const HappyClient = () => {
    return (

        <div style={{ background: "#ccc4d7" }}>
            <section id="happyclient">
                <Container className="p-5">
                    <h3 className="text-center">Our Happy Client</h3>
                    <Row>
                        <Col style={{ borderLeft: `1px solid #e0e0e0` }}>
                            <h2 className="font-weight-700 text-center">
                                300+
                            </h2>
                            <h5 className="text-center">companies have trusted us</h5>
                        </Col>
                        <Col style={{ borderLeft: `1px solid #e0e0e0` }}>
                            <h2 className="font-weight-700 text-center">
                                90%
                            </h2>
                            <h5 className="text-center">reduced cost</h5>
                        </Col>
                        <Col style={{ borderLeft: `1px solid #e0e0e0` }}>
                            <h2 className="font-weight-700 text-center">
                                100%
                            </h2>
                            <h5 className="text-center">guarantee</h5>
                        </Col>
                    </Row>

                </Container>
            </section>
        </div>
    )
}

export default HappyClient;