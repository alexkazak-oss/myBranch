import React from 'react'
import style from './style.module.scss'

import phoneImg from './../../../assets/images/logos/Footer/imagePhones.png'

import fb from './../../../assets/images/logos/Footer/fb.png'
import inImg from './../../../assets/images/logos/Footer/in.png'
import insta from './../../../assets/images/logos/Footer/insta.png'
import x from './../../../assets/images/logos/Footer/x.png'
import yt from './../../../assets/images/logos/Footer/yt.png'

const FooterTop = () => {
	const images = [fb, insta, x, yt, inImg]

	const countries = [
		'Agartala',
		'Agra',
		'Ahmedabad',
		'Aizawl',
		'Ajmer',
		'Akola',
		'Amritsar',
		'Anand',
		'Ankleshwar',
		'Balasinor',
		'Bengaluru',
		'Bhagalpur',
		'Bhopal',
		'Bhubaneswar',
		'Chandigarh',
		'Chennai',
		'Coimbatore',
		'Deesa',
		'Dehradun',
		'Delhi',
		'Dhanbad',
		'Dhule',
		'Dimapur',
		'Gangtok',
		'Gorakhpur',
		'Guntur',
		'Gurgaon',
		'Guwahati',
		'Gwalior',
		'Hanumakonda',
		'Hyderabad',
		'Imphal',
		'Indore',
		'Itanagar',
		'Jabalpur',
		'Jaipur',
		'Jalandhar',
		'Jamshedpur',
		'Jodhpur',
		'Kanpur',
		'Lucknow',
		'Ludhiana',
		'Madurai',
		'Mangaluru',
		'Meerut',
		'Mumbai',
		'Mysore',
		'Nagpur',
		'Nandurbar',
		'Nashik',
		'Navi Mumbai',
		'Noida',
		'Panaji',
		'Patna',
		'Pondicherry',
		'Prayagraj',
		'Pune',
		'Raipur',
		'Rajahmundry',
		'Ranchi',
		'Ratlam',
		'Salem',
		'Shillong',
		'Shimla',
		'Sikar',
		'Siliguri',
		'Tiruchirappalli',
		'Tirupati',
		'Udaipur',
		'Varanasi',
		'Vellore',
		'Vishakhapatnam',
	]

	return (
		<div className={style.footerTop}>
			<div className={style.topWrapper}>
				<div className={style.presenceContainer}>
					<h3>Our presence :</h3>
					<div className={style.countriesContainer}>
						{countries.map((city, index) => (
							<React.Fragment key={index}>
								<a href='#'>{city}</a>
								{index < countries.length - 1 && <span> | </span>}
							</React.Fragment>
						))}
					</div>
				</div>
			</div>

			<div className={style.bottomWrapper}>
				<div className={style.linksWrapper}>
					<div className={style.linksContainer}>
						<div className={style.links}>
							<h3>Useful Links</h3>
							<ul>
								<li>
									<a href='#'>About Us</a>
								</li>
								<li>
									<a href='#'>Careers</a>
								</li>
								<li>
									<a href='#'>Contact Us</a>
								</li>
								<li>
									<a href='#'>News & Media</a>
								</li>
								<li>
									<a href='#'>Awards</a>
								</li>
								<li>
									<a href='#'>Blog</a>
								</li>
							</ul>
						</div>
						<div className={style.links}>
							<ul>
								<li>
									<a href='#'>Brokerage / Aggregator!</a>
								</li>
								<li>
									<a href='#'>Landlord</a>
								</li>
								<li>
									<a href='#'>Privacy Policy</a>
								</li>
								<li>
									<a href='#'>Privacy Policy App</a>
								</li>
								<li>
									<a href='#'>Terms And Condition</a>
								</li>
							</ul>
						</div>
						<div className={style.positions}>
							<div className={style.position}>
								<h3>Corporate Office :</h3>
								<p>
									ITC Park, 6th Floor, Tower 8, CBD Belapur, Sector 11, Navi
									Mumbai, Maharashtra, India - 400614
								</p>
							</div>
							<div className={style.position}>
								<h3>Registered Office :</h3>
								<p>
									Kanakia Zillion, Unit No.114, E wing, 1st Floor, BKC Annex,
									CSTM Road Junction, Kurla West, Mumbai, Maharashtra, India –
									400070
								</p>
							</div>
						</div>
					</div>

					<div className={style.copyright}>
						<p>
							Copyright - 2024. MyBranch Services Private Limited | All rights
							reserved.
						</p>
					</div>
				</div>

				<div className={style.socialsContainer}>
					<div className={style.socials}>
						{images.map((el, i) => (
							<React.Fragment key={i}>
								<a href='#'>
									<img src={el} alt='' />
								</a>
							</React.Fragment>
						))}
					</div>
					<div className={style.appStore}>
						<p>Download My Branch SpaceOnDemand App</p>
					</div>
					<div className={style.phonesImg}>
						<img src={phoneImg} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterTop
