import React from 'react'
import {SwiperProvider2} from '../../../utils/SwiperProvider'
import {PresentationSwiper2} from '../../../utils/Swipers'

import style from './style.module.scss'

const PresentationSwiper = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				<SwiperProvider2>
					<PresentationSwiper2 />
				</SwiperProvider2>
			</div>
		</div>
	)
}

export default PresentationSwiper
