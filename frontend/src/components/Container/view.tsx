import React from 'react';
import styles from './styles.module.css';
import { ContainerProps } from './types';

export const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};
