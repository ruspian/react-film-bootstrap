import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import avengerImage from '../assets/images/tranding/avenger2.jpg'

const SuperHero = () => {
  return (
    <div>
        <Container>
            <br/>
            <h1 className='text-white'>SUPERHERO FILMS</h1>
            <br/>
            <Row>
                <Col md={4} className='movieWrapper' id='superhero'>
                    <Card className="movieImage">
                    <Image src={avengerImage} alt="avenger" />
                    <div className='bg-dark'>
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Card title</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="movieImage">
                    <Image src={avengerImage} alt="avenger" />
                    <div className='bg-dark'>
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Card title</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="movieImage">
                    <Image src={avengerImage} alt="avenger" />
                    <div className='bg-dark'>
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Card title</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                    </Card>
                    </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="movieImage">
                    <Image src={avengerImage} alt="avenger" />
                    <div className='bg-dark'>
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Card title</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                    </Card>
                    </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="movieImage">
                    <Image src={avengerImage} alt="avenger" />
                    <div className='bg-dark'>
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Card title</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                    </Card>
                    </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="movieImage">
                    <Image src={avengerImage} alt="avenger" />
                    <div className='bg-dark'>
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Card title</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                    </Card>
                    </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SuperHero