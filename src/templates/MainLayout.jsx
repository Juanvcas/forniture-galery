import { Footer } from '../components/global/Footer';
import { Header } from '../components/global/Header';

export const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};
