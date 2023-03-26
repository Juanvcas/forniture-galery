import { Link } from 'react-router-dom';

export const MainNav = ({ styles }) => (
	<ul className={styles}>
		<li>
			<Link to={'/'}>Catálogo</Link>
		</li>
		<li>
			<Link to={'/'}>Proyectos</Link>
		</li>
		<li>
			<Link to={'/'}>Nosotros</Link>
		</li>
		<li>
			<Link to={'/'}>Contácto</Link>
		</li>
	</ul>
);
