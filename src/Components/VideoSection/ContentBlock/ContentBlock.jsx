import React from 'react'
import Bg1 from './../../svg/bgWrappers/Bg1/Bg1'

import style from './style.module.scss'

const ContentBlock = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				<div className={style.intro}>
				<h3>Cheers to 8 amazing years of growth</h3>
				<p>
					Cheers to 8 amazing years of growth and success at MyBranch! From
					humble beginnings to incredible milestones, we couldn't have done it
					without our fantastic team and inspiring community. Here's to the
					journey so far and the infinite opportunities and accomplishments
					ahead.
				</p>
				</div>
			</div>
			<Bg1 />
		</div>
	)
}

export default ContentBlock
