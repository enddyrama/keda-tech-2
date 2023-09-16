import { Card, Button, Container } from "react-bootstrap";


interface Props {
    image?: string;
    title?: string;
    description?: string;
    price?: string;
    feature?: string[];
    tier?: string;
}

const CardPricing = ({ title, description, price, feature, image, tier }: Props) => {
    return (
        <Card data-testid={`card-pricing`} style={{ minHeight: 930, margin: 3 }}>
            <div style={{ minHeight: 400, display: "flex", alignItems: "center" }}>
                <Card.Img variant="top" src={image} alt="Card Image" />
            </div>
            <Card.Body >
                <Container>
                    <div className="text-center">
                        <Card.Title style={{ color: "#7E64B4", fontWeight: 700, fontSize: 24 }}>
                            {tier ? tier : "-"} {title ? title : "-"}
                        </Card.Title>
                        <Card.Text style={{ fontSize: 14 }}>
                            {description ? description : "-"}
                        </Card.Text>
                        <div>Rp<span style={{ fontSize: 46 }}>{price ? price : "-"}</span>/bln</div>
                        <p style={{ fontWeight: 700, color: "#7E64B4" }}>+ Gratis 2 Bulan</p>
                        <div className="d-grid">
                            <Button>Pilih Paket</Button>
                        </div>
                        <div style={{ border: `1px solid #7E64B4`, margin: `20px 30px 20px 30px` }}></div>
                        <h4>Fitur Unggulan</h4>
                    </div>
                    <div>
                        <ul className="checklist">
                            {
                                feature && feature.map((item, index) => (
                                    <li key={index + 1}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </Container>
            </Card.Body>
        </Card>
    )

};

export default CardPricing;