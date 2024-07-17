import React from 'react'
import style from './style.module.scss'
import VideoBlock from './VideoBlock/VideoBlock'
import ContentBlock from './ContentBlock/ContentBlock'

const VideoSection = () => {
	return (
		<div className={style.wrapper}>
			<ContentBlock />
			<VideoBlock embedId='NErrGZ64OdE' />
		</div>
	)
}

export default VideoSection
