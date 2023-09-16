import { Col, Container, Row } from "react-bootstrap";
import { SvgAbout } from "../../assets/svg";

const SectionAbout = () => {
    return (
        <div className="p-5 m-5">
            <Container >
                <section id="about" style={{}}>
                    <Row>
                        <Col md={4}>
                            <SvgAbout />
                        </Col>
                        <Col>
                            <p style={{ textAlign: "justify" }}>About Company</p>
                            <h4 style={{ textAlign: "justify" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut laoreet massa.
                            </h4>
                            <p style={{ textAlign: "justify" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut laoreet massa. Aliquam a sem venenatis, feugiat quam vitae, tristique lectus. Curabitur risus risus, consequat a facilisis a, gravida consequat magna. Cras viverra, diam maximus ultricies rhoncus, ligula dolor imperdiet odio, vitae facilisis velit orci sit amet justo. In rutrum elit tellus, ac pellentesque dolor accumsan sit amet. Nunc scelerisque non dui at convallis. Sed sodales libero eget quam aliquet aliquet
                            </p>
                        </Col>
                    </Row>
                </section>
            </Container>
        </div>
    )
};

export default SectionAbout;