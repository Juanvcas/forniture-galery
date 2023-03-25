import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './templates/MainLayout';
import Home from './pages/Home';
import './styles/index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MainLayout>
			<RouterProvider router={router} />
		</MainLayout>
	</React.StrictMode>
);
