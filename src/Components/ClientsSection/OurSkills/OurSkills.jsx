import PropTypes from 'prop-types'
import React from 'react'
import style from './style.module.scss'

const Card = ({title, text, name, description, media}) => {
	return (
		<div className={style.card}>
			{media && <div className={style.cardMedia}>{media}</div>}
			<div className={style.cardContent}>
				<div className={style.presentationText}>
					<p className={style.title}>{title}</p>
					<p className={style.text}>{text}</p>
				</div>
				<div className={style.nameDescription}>
					<p className={style.title}>{name}</p>
					<p className={style.text}>{description}</p>
				</div>
			</div>
		</div>
	)
}

// Пропсы и их типы

Card.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	media: PropTypes.element,
}

const OurSkills = () => {
	const cardData = [
		{
			title: 'Wonderful Service',
			text: 'MyBranch is an office space solution provider in India, founded in 2016 by',
			name: 'Will Johnson',
			description: 'Designer',
			media: <div>Media Content</div>,
		},
		{
			title: 'Amazing Experience',
			text: 'This was an amazing experience and the team was very professional.',
			name: 'Jane Smith',
			description: 'Developer',
			media: <div>Media Content</div>,
		},
	]

	return (
		<div className={style.wrapper}>
			<p className={style.sectionTitle}>Some Words From Our Clients</p>
			<div className={style.cardsContainer}>
				{cardData.map((card, index) => (
					<Card
						key={index}
						title={card.title}
						text={card.text}
						name={card.name}
						description={card.description}
						media={card.media}
					/>
				))}
			</div>
		</div>
	)
}

export default OurSkills
