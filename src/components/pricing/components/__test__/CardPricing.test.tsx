import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import CardPricing from '../CardPricing';

afterEach(() => {
    cleanup();
});

test('Should render Completed CardPricing', () => {
    const mockProps = {
        title: 'Test Title',
        description: 'Test Description',
        price: '100',
        feature: ['Feature 1', 'Feature 2'],
        image: 'test-image.jpg',
        tier: 'Test Tier',
    };
    render(<CardPricing {...mockProps} />)
    const cardPricingElement = screen.getByTestId("card-pricing");
    expect(cardPricingElement).toBeInTheDocument();
    expect(cardPricingElement).toHaveTextContent('Test Title')
    expect(cardPricingElement).toHaveTextContent('Test Description');
    expect(cardPricingElement).toHaveTextContent('100');
    expect(cardPricingElement).toHaveTextContent('Feature 1');
    expect(cardPricingElement).toHaveTextContent('Feature 2');
    const imageElement = screen.getByAltText('Card Image');
    expect(imageElement).toHaveAttribute('src', 'test-image.jpg');
    expect(cardPricingElement).toHaveTextContent('Test Tier');
});

test('Should render CardPricing with incomplete data', () => {
    render(<CardPricing />);

    // Check if the component is rendered
    const cardPricingElement = screen.getByTestId('card-pricing');
    expect(cardPricingElement).toBeInTheDocument();
    expect(cardPricingElement).toHaveTextContent("-")
});