import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';
import { SkewTextProps } from './types';

export const SkewText: React.FC<SkewTextProps> = ({
	children,
	className: classNameProp,
	component = 'div',
}) => {
	const className = clsx(styles.skewText, classNameProp);
	return React.createElement(component, { className }, children);
};
