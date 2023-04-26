import React from 'react'
import "./swiper.css"
import Calculator from "../img/calculator.jpg"
import Portfolio from "../img/portfolio.png"
import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/react'





const swiper = () => {
    return (
        <>
            <div className="container portfolio" id='project'>
              <h1><span >Recent Project</span></h1>  
              

                <Swiper
        
                    autoplay={true}
                  
                    grabCursor={true}
                    
                    className='portfolio-slider'


                >
                    <SwiperSlide className={{innerWidth:'20rem',}} 
                    >
                      <a href="https://ruteekj.github.io/calculator/"rel="noopener noreferrer" target="_blank"> <img className='sliode' src={Calculator} alt="img" /></a> 

                    </SwiperSlide>
                    <SwiperSlide className={{innerWidth:'20rem',}}
                    >
                        <img className='sliode' src={Portfolio} alt="img" />

                    </SwiperSlide>
                  

                </Swiper>

            </div>


        </>
    )
}

export default swiper