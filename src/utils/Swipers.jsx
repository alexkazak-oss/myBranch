import React, {useContext, useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {SwiperContext1, SwiperContext2, SwiperContext3} from './SwiperProvider'

import {Slider1, Slider2} from './swiperImages/images'

import style from './style.module.scss'

const PresentationSwiper1 = () => {
	const swiperConfig1 = useContext(SwiperContext1)

	return (
		<Swiper {...swiperConfig1}>
			{Slider1.map((item, index) => (
				<SwiperSlide className={style.slide1} key={index}>
					<img src={item.img} alt={`Slide ${index}`} />
				</SwiperSlide>
			))}
			<SwiperSlide className={style.slide1}>Slide B</SwiperSlide>
			<SwiperSlide className={style.slide1}>Slide B</SwiperSlide>
			<SwiperSlide className={style.slide1}>Slide B</SwiperSlide>
			<SwiperSlide className={style.slide1}>Slide B</SwiperSlide>
			<SwiperSlide className={style.slide1}>Slide B</SwiperSlide>
			<SwiperSlide className={style.slide1}>Slide B</SwiperSlide>
		</Swiper>
	)
}

const PresentationSwiper2 = () => {
	const swiperConfig2 = useContext(SwiperContext2)

	return (
		<Swiper {...swiperConfig2}>
			{Slider2.map((item, index) => (
				<SwiperSlide className={style.slide2} key={index}>
					<img src={item.img} alt={`Slide ${index}`} />
				</SwiperSlide>
			))}
			<SwiperSlide className={style.slide2}>Slide B</SwiperSlide>
			<SwiperSlide className={style.slide2}>Slide B</SwiperSlide>
			<SwiperSlide className={style.slide2}>Slide B</SwiperSlide>
			<SwiperSlide className={style.slide2}>Slide B</SwiperSlide>
			<SwiperSlide className={style.slide2}>Slide B</SwiperSlide>
			<SwiperSlide className={style.slide2}>Slide B</SwiperSlide>
			<SwiperSlide className={style.slide2}>Slide B</SwiperSlide>
		</Swiper>
	)
}

const CitiesSwiper = () => {
	const swiperConfig3 = useContext(SwiperContext3)
	const swiperRef = useRef(null)

	const handleButtonClick = (index) => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideToLoop(index)
		}
	}

	return (
		<div className={style.swiperCitiesContainer}>
			<div className={style.buttonsContainer}>
				<button className={style.button} onClick={() => handleButtonClick(0)}>
					All
				</button>
				<button className={style.button} onClick={() => handleButtonClick(3)}>
					West
				</button>
				<button className={style.button} onClick={() => handleButtonClick(6)}>
					East
				</button>
				<button className={style.button} onClick={() => handleButtonClick(9)}>
					South
				</button>
				<button className={style.button} onClick={() => handleButtonClick(12)}>
					North
				</button>
			</div>
			<Swiper {...swiperConfig3} ref={swiperRef}>
				<SwiperSlide className={style.slide3}>All</SwiperSlide>
				<SwiperSlide className={style.slide3}>All</SwiperSlide>
				<SwiperSlide className={style.slide3}>All</SwiperSlide>

				<SwiperSlide className={style.slide3}>West</SwiperSlide>
				<SwiperSlide className={style.slide3}>West</SwiperSlide>
				<SwiperSlide className={style.slide3}>West</SwiperSlide>

				<SwiperSlide className={style.slide3}>East</SwiperSlide>
				<SwiperSlide className={style.slide3}>East</SwiperSlide>
				<SwiperSlide className={style.slide3}>East</SwiperSlide>

				<SwiperSlide className={style.slide3}>South</SwiperSlide>
				<SwiperSlide className={style.slide3}>South</SwiperSlide>
				<SwiperSlide className={style.slide3}>South</SwiperSlide>

				<SwiperSlide className={style.slide3}>North</SwiperSlide>
				<SwiperSlide className={style.slide3}>North</SwiperSlide>
				<SwiperSlide className={style.slide3}>North</SwiperSlide>
			</Swiper>
		</div>
	)
}

export {CitiesSwiper, PresentationSwiper1, PresentationSwiper2}
