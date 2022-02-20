import layoutStyles from '../styles/Layout.module.css';
import Header from './Header';
import Meta from './Meta';
import Nav from './Nav';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Meta />
			<Nav />
			<div className={layoutStyles.container}>
				<main className={layoutStyles.main}>
					<Header />
					{children}
				</main>
			</div>
		</>
	);
}
