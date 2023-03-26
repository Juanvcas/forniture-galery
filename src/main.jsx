import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './templates/MainLayout';
import Home from './pages/Home';
import './styles/index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<MainLayout>
				<Home />
			</MainLayout>
		),
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
