import style from './style.module.scss'
import {SwiperProvider3} from '../../../utils/SwiperProvider'
import {CitiesSwiper} from '../../../utils/Swipers'

const CitiesSlider = () => {
	return (
		<div className={style.citiesWrapper}>
			<SwiperProvider3>
				<CitiesSwiper />
			</SwiperProvider3>
		</div>
	)
}

export default CitiesSlider
