import React from 'react'
import EightSvg from '../../Eight'
import HashSvg from '../../Hash'
import PositionSvg from '../../Position'
import YearSvg from '../../Year'

import style from './style.module.scss'

const Bg1 = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				<EightSvg />
				<HashSvg />
				<YearSvg />
				<PositionSvg />
			</div>
		</div>
	)
}

export default Bg1
