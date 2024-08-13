import React from 'react'
import style from './style.module.scss'

const Card = ({title, text, name, description, media}) => {
	return (
		<div className={style.wrapper}>
			<p className={style.setionTitle}>Some Words From Our Clients </p>
			<div className={style.cardsContainer}>
		<div className={style.card}>
			{media && <div className={style.cardMedia}>{media}</div>}
			<div className={style.cardContent}>
				<div className={style.presentationText}>
							<p className={style.title}>Wonderful Service</p>
							<p className={style.text}>
								MyBranch is an office space solution provider in India, founded
								in 2016 by Mr. Narayan Bhargava founded in 2016 by Mr. Narayan
								Bhargava.
							</p>
						</div>
						<div className={style.nameDescription}>
							<p className={style.title}>Will Johnson</p>
							<p className={style.text}>Designer</p>
						</div>
					</div>
				</div>

				<div className={style.card}>
					<div className={style.cardContent}>
						<div className={style.presentationText}>
							<p className={style.title}>Wonderful Service</p>
							<p className={style.text}>
								MyBranch is an office space solution provider in India, founded
								in 2016 by Mr. Narayan Bhargava founded in 2016 by Mr. Narayan
								Bhargava.
							</p>
						</div>
						<div className={style.nameDescription}>
							<p className={style.title}>Will Johnson</p>
							<p className={style.text}>Designer</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OurSkills
