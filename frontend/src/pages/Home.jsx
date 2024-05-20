import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import SubTitle from '../shared/SubTitle'
import SearchBox from '../shared/SearchBox'
import ServiceList from '../services/ServiceList'
import experienceImg from '../assets/images/experience.png'
import FeatureTourList from '../components/Feature-tours/FeatureTourList'
import MansonrygalleryImages from '../components/Image-gallery/MansonrygalleryImages'
import Testimonial from '../components/Testimonial/Testimonial'
import NewsLetter from '../shared/NewsLetter'
const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className='hero__subtitle d-flex align-items-center'>
                  <SubTitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt=''></img>
                </div>
                <h1>Travelling Opens the door to creating&nbsp;<span className='highlight'>Memorise </span></h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box'>
                <img src={heroImg} alt='' />
              </div>
            </Col>

            <Col lg='2'>
              <div className='hero__img-box hero__video-box  mt-4 '>
                <video src={heroVideo} alt='' controls />
              </div>
            </Col>


            <Col lg='2'>
              <div className='hero__img-box mt-5'>
                <img src={heroImg02} alt='' />
              </div>
            </Col>
            <SearchBox />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className='services__title'>We Offer  our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>



      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <SubTitle subtitle={'Explore'} />
              <h2 className="featured__tour-title">Our feature Tours</h2>
            </Col>
            <FeatureTourList />
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg='6' className='mb-5'>
              <div className='experience__content'>
                <SubTitle subtitle={'Experience'} />
                <h2 className="featured__tour-title">
                  With our all experience <br />we will serve you
                </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  <br />of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className="conter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Sucessfull trip</h6>
                </div>

                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>

                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>  
            <div className="experience__img">
              <img src={experienceImg} alt=' '/>
            </div>
            </Col>
          </Row>
        </Container>
      </section>



      
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <SubTitle subtitle={'Gallery'} />
              <h2 className="gallery__title">Visit our cutomers tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MansonrygalleryImages />
            </Col>
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <SubTitle subtitle={'Fans Love'} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
            <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter />



    </>


  )
}

export default Home