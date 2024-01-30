import Logo1 from '../../public/img/slider/1.jpg'
import Logo2 from '../../public/img/slider/2.jpg'
import Logo3 from '../../public/img/slider/3.png'



const data = [
  {
    id: 1,
    image: Logo1,
    title: '1'
  },
  {
    id: 2,
    image: Logo2,
    title: '2'
  },


  {
    id: 3,
    image: Logo3,
    title: '3'
  },
 





]

import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true ,
    };
    return (
      <div className='overflow-x-hidden mx-auto  '>
        <Slider {...settings}   >

          {data.map((item, index) => {
            return (
              <div className='gap-44  h-[400px] relative ' key={index} >
                <h2 className='absolute bottom-4 pl-20 uppercase  text-6xl'>get our Latest  <br /> <p className='font-bold my-1'>Fashion Products</p> </h2>
                <img src={item.image} className='  w-full object-cover h-full  ' />
              </div>
            )
          })}

        </Slider>
      </div>
    );
  }
}