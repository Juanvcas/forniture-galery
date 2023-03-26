import { MainNav } from './MainNav';
import '../../styles/components/global/Footer.css';

export const Footer = () => {
	return (
		<footer className='footer'>
			<section className='footer-cont content-limit'>
				<div className='footer_logo'>
					<p>M/O</p>
				</div>
				<div>
					<MainNav styles={'footer_nav'} />
				</div>
			</section>
		</footer>
	);
};
