import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';

export const Logo: React.FC = () => {
	return (
		<h1 className={styles.logo}>
			<Link href="/" className={styles.logoLink}>
				Sick Fits
			</Link>
		</h1>
	);
};
