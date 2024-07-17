import style from './style.module.scss'
import PresentationSwiper from './PresentationSlider/PresentationSlider';
import PresentationContent from './PresentationContent/PresentationContent';

const Presentation = () => {
	return (<div className={style.wrapper}>
		<div className={style.container}>
		<PresentationSwiper />
		<PresentationContent/>
		</div>
	</div> );
}
 
export default Presentation;
