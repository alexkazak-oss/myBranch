import React from 'react'
import Looper from './../../../utils/infiniteLooper/Looper'
import style from './style.module.scss'

import abgroupImg from './../../../assets/images/brands/abgroup.png'
import axisImg from './../../../assets/images/brands/axis.png'
import bridgestoneImg from './../../../assets/images/brands/bridgestone.png'
import canaraImg from './../../../assets/images/brands/canara.png'
import samsungImg from './../../../assets/images/brands/samsung.png'

const OurClients = () => {
	return (
		<div className={style.wrapper}>
			<h3 className={style.title}>
				Our <strong>Premium Clients</strong>
			</h3>
			<Looper speed={20} direction='left'>
				<div className='contentBlock contentBlock--one'>
					<img src={samsungImg} alt='' />
				</div>
				<div className='contentBlock contentBlock--one'>
					<img src={bridgestoneImg} alt='' />
				</div>
				<div className='contentBlock contentBlock--one'>
					<img src={canaraImg} alt='' />
				</div>
				<div className='contentBlock contentBlock--one'>
					<img src={axisImg} alt='' />
				</div>
				<div className='contentBlock contentBlock--one'>
					<img src={abgroupImg} alt='' />
				</div>
				<div className='contentBlock contentBlock--one'>
					<img src={axisImg} alt='' />
				</div>
			</Looper>

			<Looper direction='right' speed={10}>
				<div className='contentBlock contentBlock--two'>
					<img src={samsungImg} alt='' />
					<img src={abgroupImg} alt='' />
					<img src={axisImg} alt='' />
					<img src={bridgestoneImg} alt='' />
					<img src={canaraImg} alt='' />
				</div>
			</Looper>
		</div>
	)
}

export default OurClients
