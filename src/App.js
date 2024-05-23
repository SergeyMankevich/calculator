import { useState } from 'react';
import styles from './app.module.css';
import { buttons } from './buttons';

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isResult, setIsResult] = useState(false);

	const appState = {
		operand1,
		setOperand1,
		operator,
		setOperator,
		operand2,
		setOperand2,
		isResult,
		setIsResult,
	};

	const output = operand1 + (operator && ' ' + operator) + (operand2 && ' ' + operand2);

	return (
		<div className={styles.container}>
			<div
				className={`${styles.screen} ${isResult ? styles.resultColor : ''}`}
			>
				{output}
			</div>
			<div className={styles.buttons}>
				<div className={styles.buttonsGroupLeft}>
					{buttons.map(({ id, name, group, handler }) =>
						group === 'left' ? (
							<button
								className={styles.button}
								key={id}
								onClick={() => handler(appState, name)}
							>
								{name}
							</button>
						) : null,
					)}
				</div>
				<div className={styles.buttonsGroupRight}>
					{buttons.map(({ id, name, group, handler }) =>
						group === 'right' ? (
							<button
								className={styles.button}
								key={id}
								onClick={() => handler(appState)}
							>
								{name}
							</button>
						) : null,
					)}
				</div>
			</div>
		</div>
	)
}
