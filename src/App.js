import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const data = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
	const [numbers] = useState(data);
	const [inputValue, setInputValue] = useState('');
	const [isEqualPressed, setIsEqualPressed] = useState(false); // для отображение стилей, при выводе результата

	const reset = () => {
		setInputValue('');
		setIsEqualPressed(false);
	};

	const sum = () => operation('+');
	const minus = () => operation('-');

	const operation = (operator) => {
		const lastChar = inputValue.slice(-1);
		if (isNaN(Number(lastChar))) {
			// чтобы нельзя было поставить много + или -, и возможно было заменить один знак на другой
			setInputValue(inputValue.slice(0, -1) + operator);
			setIsEqualPressed(false);
		} else {
			setInputValue(inputValue + operator);
		}
	};
	const findResult = () => {
		if (inputValue.length === 1 && isNaN(Number(inputValue[0]))) {
			// если в строке ввода, тольк знак операции
			reset();
			return;
		}
		if (inputValue) {
			let lastChar = inputValue.slice(-1);
			let res;
			if (isNaN(parseInt(lastChar))) {
				res = eval(inputValue.slice(0, -1));
			} else {
				res = eval(inputValue);
			}
			setInputValue(res.toString());
			setIsEqualPressed(true);
		}
	};

	return (
		<div className={styles.container}>
			<div
				className={`${styles.inputResult} ${isEqualPressed ? styles.resultColor : ''}`}
			>
				{inputValue}
			</div>
			<div className={styles.mainContent}>
				<div className={styles.digitContainer}>
					{numbers.map((digit, index) => (
						<button
							key={index}
							className={styles.digit}
							onClick={() => {
								setInputValue(inputValue + String(digit));
							}}
						>
							{digit}
						</button>
					))}
				</div>
				<div className={styles.functionContainer}>
					<button className={styles.func} onClick={reset}>
						c
					</button>
					<button className={styles.func} onClick={sum}>
						+
					</button>
					<button className={styles.func} onClick={minus}>
						-
					</button>
					<button className={styles.func} onClick={findResult}>
						=
					</button>
				</div>
			</div>
		</div>
	);
};
