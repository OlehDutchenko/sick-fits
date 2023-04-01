import Link from 'next/link';
import React from 'react';

const nav = [
	{ href: '/products', label: 'Products' },
	{ href: '/sell', label: 'Sell' },
	{ href: '/orders', label: 'Orders' },
	{ href: '/account', label: 'Account' },
];

export const Nav: React.FC = () => {
	return (
		<nav>
			<ul>
				{nav.map(({ href, label }) => (
					<li key={href}>
						<Link href={href}>{label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
