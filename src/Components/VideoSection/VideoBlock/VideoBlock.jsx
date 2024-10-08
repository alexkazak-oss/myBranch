import React from 'react'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const VideoBlock = ({embedId}) => (
	<div className={style.videoResponsive}>
		<iframe
			width='853'
			height='480'
			src={`https://www.youtube.com/embed/${embedId}`}
			frameBorder='1'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			allowFullScreen
			title='Embedded youtube'
		/>
	</div>
)

VideoBlock.propTypes = {
	embedId: PropTypes.string.isRequired,
}

export default VideoBlock
