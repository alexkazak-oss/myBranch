import style from './style.module.scss'

import logo1 from './../../../assets/images/logos/Footer/narayan-logo.png'
import logo2 from './../../../assets/images/logos/Footer/NSB&Co.png'
import logo3 from './../../../assets/images/logos/Footer/CB.png'
import logo4 from './../../../assets/images/logos/Footer/Gromaxx.png'
import logo5 from './../../../assets/images/logos/Footer/NBF.png'

const FooterBottom = () => {
	return (
		<div className={style.bottomWrapper}>
			<div className={style.iconsContainer}>
				
				<div className={style.leftContainer}>
					<img src={logo1} alt="" />
				</div>

				<div className={style.rightContainer}>
					<>
					<img src={logo2} alt="" />
					</>
					<>
					<img src={logo3} alt="" />
					</>
					<>
					<img src={logo4} alt="" />
					</>
					<>
					<img src={logo5} alt="" />
					</>
				
				</div>
			</div>
		</div>
	)
}

export default FooterBottom
