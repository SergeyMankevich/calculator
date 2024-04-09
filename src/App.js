import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isEqualPressed, setIsEqualPressed] = useState(false); // для отображение стилей, при выводе результата

	const digits = (event) => {
		const number = event.target.textContent;
		operator ? setOperand2(operand2 + number) : setOperand1(operand1 + number);
	};

	const operations = (event) => {
		const currentBtn = event.target;
		const operation = currentBtn.textContent;
		switch (operation) {
			case 'c': {
				setOperand1('');
				setOperator('');
				setOperand2('');
				setIsEqualPressed(false);
				break;
			}

			case '+': {
				setOperator('+');
				setIsEqualPressed(false);
				break;
			}

			case '-': {
				setOperator('-');
				setIsEqualPressed(false);
				break;
			}

			case '=': {
				let result = +operand1 + +operand2;

				if (operator === '-') {
					result = +operand1 - +operand2;
				}
				setOperand1(result);
				setOperator('');
				setOperand2('');
				setIsEqualPressed(true);
				break;
			}

			default:
				break;
		}
	};

	return (
		<div className={styles.container}>
			<div
				className={`${styles.inputResult} ${isEqualPressed ? styles.resultColor : ''}`}
			>
				{operand1}
				{operator}
				{operand2}
			</div>
			<div className={styles.mainContent}>
				<div className={styles.digitContainer}>
					{nums.map((digit) => (
						<button key={digit} className={styles.digit} onClick={digits}>
							{digit}
						</button>
					))}
				</div>
				<div className={styles.functionContainer} onClick={operations}>
					<button className={styles.func}>c</button>
					<button className={styles.func}>+</button>
					<button className={styles.func}>-</button>
					<button className={styles.func}>=</button>
				</div>
			</div>
		</div>
	);
};
