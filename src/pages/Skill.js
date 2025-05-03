import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoSettings } from "react-icons/io5";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './style.css'

import PythonImg from '../Image/python.png'
import JavaScript from '../Image/js.png'
import Nodejs from '../Image/node1.png'
import mySql from '../Image/sql1.png'
import mongoDB from '../Image/mongoDB.png'
import salesforce from '../Image/sfdc1.png'
import ReactLogo from '../Image/ReactLogo.png'
import awsLogo from '../Image/AWS.png'
import flaskLogo from '../Image/flask.png'
import htmlLogo from '../Image/html.png'
import cssLogo from '../Image/css.png'
import bootstrapLogo from '../Image/bootstrap.png'
import openAi from '../Image/openAi.png'
import git from '../Image/git.png'
import github from '../Image/github1.png'
import msoffice from '../Image/msoffice.png'
const Skill = () => {

  return (
    <>
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}><IoSettings style={{ marginRight: "10px", fontSize: "32px" }} />Technical Skills:<hr /></h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img src={PythonImg}  alt='pythonImg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Nodejs} alt='Nodejsimage'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={JavaScript} alt='JavaScriptImg' />
        </SwiperSlide>
       
        <SwiperSlide>
          <img src={mySql} alt='mySQLimage'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={mongoDB} alt='mongoDBimage'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={salesforce} alt='salesforceImg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ReactLogo} alt='ReactImage'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={awsLogo} alt='awsLogo'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={flaskLogo} alt='flaskLogo'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={htmlLogo} alt='htmlLogo'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cssLogo} alt='cssLogo'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={bootstrapLogo} alt='bootstarpLogo'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={openAi} alt='openAiLogo'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={git} alt='gitLogo'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={github} alt='githubLogo'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={msoffice} alt='msofficeLogo'/>
        </SwiperSlide>
      </Swiper>

    </>
  )
}

export default Skill
