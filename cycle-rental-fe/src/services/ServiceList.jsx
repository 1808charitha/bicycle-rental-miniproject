import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
// import wetherImg from '../assets/images/cycle-images/cycle-1.jpeg'
import wetherImg from '../assets/images/cycle-images/cycle-17.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData = [
    {
        imgUrl: wetherImg,
        title: "Flexible Rides",
        desc: "Hourly/Days based",
    },
    {
        imgUrl: guideImg,
        title: "Affordable Prices",
        desc: "Choose bicycle according to your range",
    },
    {
        imgUrl: customizationImg,
        title: "customization",
        desc: "pickup Your own vehicle",
    },
]

const ServiceList = () => {
    return <>
        {
            serviceData.map((item, index) => <Col lg='3' sm='12' className='mb-4' key={index}><ServiceCard item={item} /></Col>)
        }
        {/* <a href='https://weather-app-react-steel-sigma.vercel.app/' target='_blank' rel="noreferrer" >Calculate Wether</a> */}
    </>
}
export default ServiceList