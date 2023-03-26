import { Outlet, Link } from 'react-router-dom';
import { MainNav } from './MainNav';
import '../../styles/components/global/Header.css';
import { useEffect } from 'react';

export const Header = () => {
	useEffect(() => {
		const headerStyle = () => {
			const header = document.querySelector('.header');
			if (window.scrollY === 0) {
				header.classList.add('header-top');
			} else {
				header.classList.remove('header-top');
			}
		};
		window.addEventListener('scroll', headerStyle);
		return () => {
			window.removeEventListener('scroll', headerStyle);
		};
	}, []);
	return (
		<header className='header'>
			<section className='header-cont content-limit'>
				<div className='header_logo'>
					<p>M/O</p>
				</div>
				<MainNav styles={'header_nav'} />
			</section>
		</header>
	);
};
