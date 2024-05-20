import React from 'react'
import './news-letter.css'
import { Container, Row, Col,Button } from 'reactstrap'
import {  Link } from 'react-router-dom'
import maleTourist from '../assets/images/male-tourist.png'

const NewsLetter = () => {
    return (
        <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='newsletter__content'>
                        <h2>Subscribe now to  get usefull travelling information</h2>   

                        <div className='newsletter__input' >
                            <input type='email' placeholder='Enter your email' />
                            <Button color='success'>Subscribe</Button>
                        </div>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </Col>
                <Col lg='6'>
                <div className='newsletter__img'>
                    <img src={maleTourist} alt='' />
                </div>
                </Col> 
            </Row>
        </Container>
        </section>
    )
}

export default NewsLetter