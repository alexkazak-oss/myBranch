import { useEffect } from 'react'
import style from './style.module.scss'

const Header = () => {

  useEffect(() => {
    const handleScroll = () => {
      const headerBottom = document.getElementById('bottom');
			const headerTop = document.getElementById('top');
			
      if (headerBottom && headerTop) {
        const bottomRect = headerBottom.getBoundingClientRect();
        const topRect = headerTop.getBoundingClientRect();
        
        if (bottomRect.top <= 0 && topRect.bottom <= 0) {
          headerBottom.classList.add(style.fixed);
        } else {
          headerBottom.classList.remove(style.fixed);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

	return (
		<header>
			<div className={style.top} id='top'>
				<a href='#'>+91 8888888888</a>
				<a href='#'>info@mybranch.com</a>

				<div className={style.actions}>
					<div className={style.buttons}>
						<button className={style.button}></button>
						<button className={style.button}></button>
					</div>
					<span>Download App</span>
				</div>
			</div>

			<div className={style.bottom} id='bottom'>
				<a className={style.logo} href='/'></a>
				<ul>
					<li><a href="#">Locations</a></li>
					<li><a href="#">Solutions</a></li>
					<li><a href="#">Flexspace Insights</a></li>
					<li><a href="#">About Us</a></li>
					<li><a href="#">Join Us</a></li>
					<li><a href="#">Contact Us</a></li>
				</ul>
				<button className={style.bottomButton}>Book a Demo</button>
			</div>
		</header>
	)
}

export default Header
