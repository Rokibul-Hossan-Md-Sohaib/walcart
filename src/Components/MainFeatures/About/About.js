import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import images1 from '../../../images/i1.png'
import images2 from '../../../images/i2.jpg'
import images3 from '../../../images/i3.jpg'

import "./About.css";

const About = () => {
  return (
    <section>
      <Carousel className=" mb-5">
      <Carousel.Item>
        <img  className="carousel" src={images1} />
        {/* <Carousel.Caption>
        <div className="item ">
            <h2>CAR INSURANCE</h2>

            <p className="heading-primary-main ">
            We make your car insurance premium affordable
           
            </p>

            <Link to="/car" class="btn btn-white btn-animated">

            Get Free Quotes
            </Link>
       
          </div>
        </Carousel.Caption> */}
      </Carousel.Item>
        {/* <Carousel.Item>
         
        </Carousel.Item> */}
    <Carousel.Item>
        <img  className="carousel" src={images2} />
        {/* <Carousel.Caption>
        <div className="item ">
            <h2>BIKE INSURANCE</h2>

            <p className="heading-primary-main ">
            We make your bike insurance premium affordable
           
            </p>

            <Link to="/car" class="btn btn-white btn-animated">

            Get Free Quotes
            </Link>
       
          </div>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img  className="carousel" src={images3} />
        {/* <Carousel.Caption>
        <div className="item ">
            <h2>VAN INSURANCE</h2>

            <p className="heading-primary-main ">
            We make your vehicle insurance premium affordable
           
            </p>

            <Link to="/car" class="btn btn-white btn-animated">

            Get Free Quotes
            </Link>
       
          </div>
        </Carousel.Caption> */}
      </Carousel.Item>

      </Carousel>
  
    </section>
  );
};

export default About;
