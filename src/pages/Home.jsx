import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Slider } from '../components/Home/Slider';
import '../styles/pages/Home.css';

const bannerSlides = [
	{
		title: <h1>Mobiliario de Oficina</h1>,
		text: <p>Encuentra lo que necesitas para tu empresa</p>,
		src: 'https://i.postimg.cc/7PzrKHkN/01.jpg',
		alt: 'Imagen de sala con un sofa doble y uno simple',
	},
	{
		src: 'https://i.postimg.cc/qMZcgTN9/Divisiones.jpg',
		alt: 'Imagen de sala de juntas con paneles de vidrio y marco metálico',
	},
	{
		src: 'https://i.postimg.cc/T15d9gcj/Home_office.jpg',
		alt: 'Imagen de espacio de trabajo en casa con escritorio, silla y otros elementos',
	},
];

const projectsSlides = [
	{
		title: <h2>Call Center</h2>,
		text: (
			<p>
				Espacio de trabajo completamente amueblada con islas de escritorios,
				oficinas y sala de estar y juntas.
			</p>
		),
		src: 'https://i.postimg.cc/PJJ4FrLQ/Puestos_de_trabajo.jpg',
		alt: 'Imagen de isla de trabajo tipo call center',
	},
];

export default function Home() {
	return (
		<>
			<Helmet>
				<title>Mobiliario de Oficina</title>
				<meta
					name='description'
					content='Mobiliario para oficina y trabajo en casa'
				/>
			</Helmet>
			<main className='main'>
				<section className='main_banner content-limit'>
					<div className='banner-cont'>
						<Slider slides={bannerSlides} />
					</div>
				</section>
				<section className='main_products content-limit'>
					<div className='products-cont'>
						<article className='products_slide'>
							<h3>Musa</h3>
							<img
								src='https://i.postimg.cc/JzGfBMPJ/Musa_Plywood_01.jpg'
								alt='Imagen de poltrona tapizada en tela con patas de madera'
							/>
						</article>
						<article className='products_text'>
							<p>
								Elegante y sofisticada, la poltrona Musa es el acompañante
								perfecto para tu escritorio
							</p>
						</article>
					</div>
					<div className='products-cont'>
						<article className='products_text'>
							<p>
								Sólida y natural, la silla Bois es el elemento fiable que debe
								estar siempre presente
							</p>
						</article>
						<article className='products_slide'>
							<h3>Bois</h3>
							<img
								src='https://i.postimg.cc/rm6QsLP8/BI04-03.jpg'
								alt='Imagen de silla de madera roble sólida'
							/>
						</article>
					</div>
				</section>
				<section className='main_catalog content-limit'>
					<div className='catalog_banner'>
						<h2>Catálogo de productos</h2>
						{/* <Link to={'/contacts'}>Ir al catálogo</Link> */}
					</div>
				</section>
				<section className='main_projects content-limit'>
					<div className='projects-cont'>
						<Slider slides={projectsSlides} />
					</div>
				</section>
			</main>
		</>
	);
}
