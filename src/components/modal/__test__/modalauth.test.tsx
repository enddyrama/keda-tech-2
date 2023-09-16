import React, { useState } from 'react';
import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import ModalAuth, { ModalAuthProps } from '..';

afterEach(() => {
    cleanup();
});

test('Should render ModalAuth with a closed modal', () => {
    function TestComponent() {
        const [openModal, setOpenModal] = useState(false);
        const mockProps: ModalAuthProps = {
            status: openModal,
            handleClose: () => setOpenModal(false),
        };
        return <ModalAuth {...mockProps} />;
    }

    render(<TestComponent />);

    const modalElement = screen.queryByTestId("modal-auth");
    expect(modalElement).toBeNull();
});

test('Should render ModalAuth with an open modal', async () => {
    function TestComponent() {
        const [openModal, setOpenModal] = useState(true);
        const mockProps: ModalAuthProps = {
            status: openModal,
            handleClose: () => setOpenModal(false),
        };
        return <ModalAuth {...mockProps} />;
    }
    render(<TestComponent />);

    // Check if the modal is rendered when open
    const modalElement = screen.getByTestId("modal-auth");
    expect(modalElement).toBeInTheDocument();
    expect(modalElement).toHaveTextContent("Login")

    const button = screen.getByText('Close');
    fireEvent.click(button);

    await waitFor(() => {
        const closedModal = screen.queryByTestId("modal-auth");
        expect(closedModal).toBeNull();
    });

});

