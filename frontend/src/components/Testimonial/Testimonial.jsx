import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true, // Fixed typo, should be "infinite" instead of "Infinity"
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3, // Fixed typo, should be "slidesToShow" instead of "slideToShow"

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2, // Fixed typo, should be "slidesToShow" instead of "slideToShow"
          slidesToScroll: 1, // Fixed typo, should be "slidesToScroll" instead of "slidesScroll"
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, // Fixed typo, should be "slidesToShow" instead of "slideToShow"
          slidesToScroll: 1, // Fixed typo, should be "slidesToScroll" instead of "slidesScroll"
        },
      },
    ],
  };


    return (
        <Slider {...settings}>
            <div className='testimonial py-4 px-3'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
           
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-25 h-25 rounded-2' alt='' />
                <div>
                    <h6 className='mb-0 mt-3'>karnan</h6>
                    <p>Customer</p>
                </div>
            </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
        
            <div className=' d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
                <div>
                    <h6 className='mb-0 mt-3'>Gokulan</h6>
                    <p>Customer</p>
                </div>
            </div>    </div>

            <div className='testimonial py-4 px-3'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
      
            <div className=' d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounded-2' alt='' />
                <div>
                    <h6 className='mb-0 mt-3'>Leo</h6>
                    <p>Customer</p>
                </div>      </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
        
            <div className=' d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
                <div>
                    <h6 className='mb-0 mt-3'>Gokulan</h6>
                    <p>Customer</p>
                </div>
            </div> </div>
        </Slider>
    )
}

export default Testimonial