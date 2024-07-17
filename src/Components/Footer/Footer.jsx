import FooterBottom from './FooterBottom/FooterBottom'
import FooterTop from './FooterTop/FooterTop'
import style from './style.module.scss'
const Footer = () => {
	return (
		<footer>
			<div className={style.footerWrapper}>
			<FooterTop></FooterTop>
			<FooterBottom></FooterBottom>
			</div>
		</footer>
	);
}
 
export default Footer;
