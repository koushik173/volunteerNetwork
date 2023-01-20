import React from 'react';
import { Card, Container } from 'react-bootstrap';
import PageTittle from '../../PageTittle/PageTittle';

const Donation = () => {
    return (
        <div>
            <PageTittle title='Donation'></PageTittle>

            <Container>
            <Card className='mb-3' style={{ width: '18rem' }}>
                <Card.Body className='bg-info'>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Card.Link>Card Link</Card.Link>
                    <Card.Link>Another Link</Card.Link>
                </Card.Body>
            </Card><Card style={{ width: '18rem' }}>
                <Card.Body className='bg-info'>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Card.Link>Card Link</Card.Link>
                    <Card.Link>Another Link</Card.Link>
                </Card.Body>
            </Card></Container>
        </div>
    );
};

export default Donation;