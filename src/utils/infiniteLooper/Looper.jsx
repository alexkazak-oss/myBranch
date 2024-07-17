import React, {useState, useEffect, useRef, useCallback} from 'react'
import LooperInstance from './LooperInstance' 
import './InfiniteLooper.scss' 

const Looper = ({speed = 1, direction = 'left', children}) => {
	const [looperInstances, setLooperInstances] = useState(1)
	const outerRef = useRef(null)
	const innerRef = useRef(null)

	const resetAnimation = () => {
		if (innerRef.current) {
			innerRef.current.setAttribute('data-animate', 'false')
			setTimeout(() => {
				if (innerRef.current) {
					innerRef.current.setAttribute('data-animate', 'true')
				}
			}, 10)
		}
	}

	const setupInstances = useCallback(() => {
		if (!innerRef.current || !outerRef.current) return

		const {width} = innerRef.current.getBoundingClientRect()
		const {width: parentWidth} = outerRef.current.getBoundingClientRect()
		const widthDeficit = parentWidth - width
		const instanceWidth = width / innerRef.current.children.length

		if (widthDeficit > 0) {
			setLooperInstances(
				looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1,
			)
		}

		resetAnimation()
	}, [looperInstances])

	useEffect(() => setupInstances(), [setupInstances])

	useEffect(() => {
		window.addEventListener('resize', setupInstances)

		return () => {
			window.removeEventListener('resize', setupInstances)
		}
	}, [looperInstances, setupInstances])

	return (
		<div className='looper' ref={outerRef}>
			<div className='looper__innerList' ref={innerRef} data-animate='true'>
				{[...Array(looperInstances)].map((_, ind) => (
					<LooperInstance key={ind} speed={speed} direction={direction}>
						{children}
					</LooperInstance>
				))}
			</div>
		</div>
	)
}

export default Looper
