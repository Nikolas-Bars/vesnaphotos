import React, {useEffect, useState} from 'react';
import s from './Slider.module.css'
import one from '../../img/forslider3.jpg'
import three from '../../img/forslider2.jpg'
import seven from '../../img/8.jpg'
import sd from '../../img/forslider.jpg'

const Slider = () => {

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
        <img alt={'image'} style={{width: '100%',verticalAlign: 'text-top'}} key={sd} src={sd}/>,
        <img alt={'image'} style={{width: '100%',verticalAlign: 'text-top'}} key={three} src={three}/>,
        <img alt={'image'} style={{width: '100%', verticalAlign: 'text-top'}} key={one} src={one}/>,
    ]

        // Вычисляем индекс предыдущего слайда
    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
        // Вычисляем индекс следующего слайда
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

    return (
        <div className={s.mainBlock}>
            <div className={s.slider}>

                <div className={`${s.sliderImg} ${s.sliderImgPrev}`}
                     key={prevImgIndex}>
                    <div style={{backgroundImage: `${img[prevImgIndex]}`}}></div>

                </div>
                <div className={s.sliderImg}
                     key={activeIndex}>
                    <div style={{backgroundImage: `${img[activeIndex]}`}}></div>

                </div>
                <div className={`${s.sliderImg} ${s.sliderImgNext}`}
                     key={nextImgIndex}>
                    {img[nextImgIndex]}
                </div>
            </div>
        </div>
    );
};

export default Slider;