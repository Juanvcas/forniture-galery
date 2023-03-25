import { useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import '../../styles/components/global/Slider.css';

export const Slider = ({ slides }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		const newIndex = currentSlide + 1;
		if (newIndex === slides.length) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(newIndex);
		}
	};

	const prevSlide = () => {
		const newIndex = currentSlide - 1;
		if (newIndex < 0) {
			setCurrentSlide(slides.length - 1);
		} else {
			setCurrentSlide(newIndex);
		}
	};

	return (
		<div className='slider'>
			<div className='slider-cont'>
				{slides.map((sld, index) => (
					<div
						key={index}
						className={
							index === currentSlide ? 'slider_sld active-sld' : 'slider_sld'
						}
					>
						<div className='sld_text'>
							{sld.title ? sld.title : null}
							{sld.text ? sld.text : null}
						</div>
						<img src={sld.src} alt={sld.alt} />
					</div>
				))}
				<button className='slider_btn-prev' onClick={prevSlide}>
					<MdArrowBackIos />
				</button>
				<button className='slider_btn-next' onClick={nextSlide}>
					<MdArrowForwardIos />
				</button>
				<ul className='slider_dots'>
					{slides.map((sld, index) => (
						<li
							key={index}
							className={index === currentSlide ? 'dot dot-active' : 'dot'}
							onClick={() => setCurrentSlide(index)}
						></li>
					))}
				</ul>
			</div>
		</div>
	);
};
