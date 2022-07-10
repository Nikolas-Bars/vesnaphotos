import React, {Component, useEffect, useState} from "react";
import Slider from "react-slick";
import s from './Slider2.module.css'
import one from '../../img/forslider3.jpg'
import three from '../../img/forslider2.jpg'
import seven from '../../img/8.jpg'
import sd from '../../img/forslider.jpg'

export const SimpleSlider = () => {

    // Индекс текущего слайда
    const [activeIndex, setActiveIndex] = useState(0);

// Хук Effect
    useEffect(() => {

        const interval = setInterval(() => {

            setActiveIndex((current) => {

                return current === img.length - 1 ? 0 : current + 1
            })
        }, 4000)
        // Выключаем интервал
        return () => clearInterval()
    }, [])

    const img = [
        <img alt={'image'} style={{width: '100%', verticalAlign: 'text-top'}} key={sd} src={sd}/>,
        <img alt={'image'} style={{width: '100%', verticalAlign: 'text-top'}} key={three} src={three}/>,
        <img alt={'image'} style={{width: '100%', verticalAlign: 'text-top'}} key={one} src={one}/>,
    ]


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,


    }

    return (
        <div className={s.mainBlock}>
            <div className={s.sliderContainer}>
                <Slider {...settings} >
                    <div className={s.slide1Block}>
                        <img src={one}/>
                    </div>
                    <div className={s.slide1Block}>
                        <img src={three}/>
                    </div>
                    <div className={s.slide1Block}>
                        <img src={sd}/>
                    </div>
                </Slider></div>
        </div>
    );
}
