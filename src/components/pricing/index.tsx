import { Col, Container, Row } from "react-bootstrap";
import { SvgAbout } from "../../assets/svg";
import CardPricing from "./components/CardPricing";
import ImgBasic from "../../assets/img/ImgBasic.png"
import ImgBusiness from "../../assets/img/ImgBusiness.png"
import ImgEntrepreneur from "../../assets/img/ImgEntrepreneur.png"

const SectionPricing = () => {
    return (
        <div className="p-5" style={{ background: "#ccc4d7" }}>
            <h3 className="text-center m-5">Pilih Tier ERP Sesuai Kebutuhan Anda</h3>
            <Container >
                <section id="pricing" style={{}}>
                    <Row>
                        <Col>
                            <CardPricing
                                tier="Tier 1"
                                image={ImgBasic}
                                title="Basic"
                                description="Cocok untuk tahap awal bisnis"
                                price="200.000"
                                feature={[
                                    "Mencatat Barang Masuk",
                                    "Mencatat Barang Keluar",
                                    "Mencatat Hasil Keuntungan"
                                ]}
                            />
                        </Col>
                        <Col>
                            <CardPricing
                                tier="Tier 2"
                                image={ImgBusiness}
                                title="Business"
                                description="Paket lengkap untuk bisnis, atau toko online"
                                price="300.000"
                                feature={[
                                    "Mencatat Barang Masuk dan Keluar",
                                    "Mencatat Hasil Keuntungan",
                                    " Menganalisa hasil penjualan dengan CHART",
                                    "Support 7x24 Jam"
                                ]}
                            />
                        </Col>
                        <Col>
                            <CardPricing
                                tier="Tier 3"
                                image={ImgEntrepreneur}
                                title="Entepreneur"
                                description="Perfoma aplikasi yang lebih optimal"
                                price="400.000"
                                feature={[
                                    "Mencatat Barang Masuk dan Keluar",
                                    "Mencatat Hasil Keuntungan",
                                    "Menganalisa hasil penjualan dengan CHART",
                                    "Support 7x24 Jam",
                                    "Export data ke Excel",
                                    "AI Prediksi Penghasilan"
                                ]}
                            />
                        </Col>
                    </Row>
                </section>
            </Container>
        </div >
    )
};

export default SectionPricing;