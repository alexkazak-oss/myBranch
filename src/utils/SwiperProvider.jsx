import React, {createContext} from 'react'
import 'swiper/css'
import {Navigation, Pagination} from 'swiper/modules'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

// Intro Swiper

const SwiperContext1 = createContext()

const SwiperProvider1 = ({children}) => {
	const swiperConfig1 = {
		modules: [Navigation, Pagination],
		navigation: true,
		spaceBetween: 1,
		slidesPerView: 1,
		autoplay: {delay: 1500},
		loop: true,
		scrollbar: {draggable: true},
	}

	return (
		<SwiperContext1.Provider value={swiperConfig1}>
			{children}
		</SwiperContext1.Provider>
	)
}

// Presentation Swiper

const SwiperContext2 = createContext()

const SwiperProvider2 = ({children}) => {
	const swiperConfig2 = {
		modules: [Navigation, Pagination],
		navigation: true,
		spaceBetween: 30,
		slidesPerView: 2,
		autoplay: {delay: 3000},
		loop: true,
		scrollbar: {draggable: true},
	}

	return (
		<SwiperContext2.Provider value={swiperConfig2}>
			{children}
		</SwiperContext2.Provider>
	)
}

// Cities swiper

const SwiperContext3 = createContext()

const SwiperProvider3 = ({children}) => {
	const swiperConfig3 = {
		modules: [Navigation, Pagination],
		navigation: true,
		spaceBetween: 50,
		slidesPerView: 3,
		autoplay: {delay: 3000},
		loop: true,
	}

	return (
		<SwiperContext3.Provider value={swiperConfig3}>
			{children}
		</SwiperContext3.Provider>
	)
}

export {
	SwiperContext1,
	SwiperContext2,
	SwiperContext3,
	SwiperProvider1,
	SwiperProvider2,
	SwiperProvider3,
}
