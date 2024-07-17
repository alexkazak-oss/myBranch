import React from 'react'
import Bg1 from './../../svg/bgWrappers/Bg1/Bg1'

import style from './style.module.scss'

const MainIntro = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				<div className={style.intro}>
					<h1>One Brand Three National Titles</h1>
					<ul>
						<li>Co-Working Brand Of the Year</li>
						<li>Best Location Network</li>
						<li>Shared Space Person Of The Year</li>
					</ul>
				</div>
			</div>
			<Bg1 />
		</div>
	)
}

export default MainIntro
