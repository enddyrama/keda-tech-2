import { Modal, Form, Button } from "react-bootstrap";

export interface ModalAuthProps {
    status: boolean;
    handleClose: () => void;
}

const ModalAuth = ({ status, handleClose }: ModalAuthProps) => {
    return (
        <Modal data-testid="modal-auth" show={status} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Login
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalAuth;