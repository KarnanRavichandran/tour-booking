import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'





const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calulate Weather",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },

    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },

    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
]


const ServiceList = () => {
    return (
        <>
            {
                servicesData.map((item, index) =>
                    <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
                        <ServiceCard item={item} />
                    </Col>)
            }
        </>
    )
}

export default ServiceList