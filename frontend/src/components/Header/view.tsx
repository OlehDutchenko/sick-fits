import { Logo } from 'Components/Logo';
import { Nav } from 'Components/Nav';
import React from 'react';
import styles from './styles.module.css';

export const Header: React.FC = () => {
	return (
		<header>
			<div className={styles.bar}>
				<Logo />
			</div>
			<div className={styles.subBar}>
				<p>Search</p>
			</div>
			<Nav />
		</header>
	);
};
