import React from 'react'

import Presentation from '../../Components/Presentation/Presentation'
import IntroSection from './../../Components/IntroSection/IntroSection'
import Workspaces from './../../Components/MainWorkspaces/Workspaces'
import MapSection from '../../Components/MapSection/Mapsection'
import VideoSection from '../../Components/VideoSection/VideoSection'
import ClientsSection from '../../Components/ClientsSection/ClientsSection'
import CitiesSection from '../../Components/CitiesSection/CitiesSection'
import {SwiperProvider1, SwiperProvider2} from './../../utils/SwiperProvider'
import style from './style.module.scss'

const Main = () => {
	return (
		<main className={style.main}>
			<SwiperProvider1>
				<IntroSection />
			</SwiperProvider1>
			<Workspaces />
			<SwiperProvider2>
				<Presentation />
			</SwiperProvider2>
			<MapSection />
			<VideoSection />
			<ClientsSection />
			<CitiesSection />
		</main>
	)
}

export default Main
