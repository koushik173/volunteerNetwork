import React from 'react';
import { Card, Container } from 'react-bootstrap';
import PageTittle from '../../PageTittle/PageTittle';

const Blog = () => {
    return (
        <div>
            <PageTittle title='Blog'></PageTittle>
            <Container>
            <h3 className='mb-2'>All Blocks</h3>
            <Card className='w-50 mb-5'>
                <Card.Header className='bg-info text-light'>Quote</Card.Header>
                <Card.Body className='bg-success text-light'>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        posuere erat a ante.{' '}
                    </p>
                    <footer className="blockquote-footer text-dark">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card className='w-50 mb-5'>
                <Card.Header className='bg-info text-light'>Quote</Card.Header>
                <Card.Body className='bg-success text-light'>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        posuere erat a ante.{' '}
                    </p>
                    <footer className="blockquote-footer text-dark">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            </Container>
        </div>
    );
};

export default Blog;