
import CitiesSlider from './CitiesSlider/CitiesSlider';

import style from './style.module.scss'

const CitiesSection = () => {
	return (<div className={style.wrapper}>
		<CitiesSlider/>
	</div> );
}
 
export default CitiesSection;
