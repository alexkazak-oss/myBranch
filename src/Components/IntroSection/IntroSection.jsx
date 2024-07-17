import InputsArea from './InputsArea/InputsArea'
import MainIntro from './MainIntro/MainIntro'
import MainTopSlider from './MainTopSlider/MainTopSlider'
import style from './style.module.scss'

const IntroSection = () => {
	return (
		<>
			<div className={style.introSection}>
				<MainIntro></MainIntro>
				<MainTopSlider></MainTopSlider>
			</div>
			<InputsArea></InputsArea>
		</>
	)
}

export default IntroSection
