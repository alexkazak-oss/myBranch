import React from 'react'
import './InfiniteLooper.scss'

const LooperInstance = ({speed, direction, children}) => {
	return (
		<div
			className='looper__listInstance'
			style={{
				animationDuration: `${speed}s`,
				animationDirection: direction === 'right' ? 'reverse' : 'normal',
			}}>
			{children}
		</div>
	)
}

export default LooperInstance
