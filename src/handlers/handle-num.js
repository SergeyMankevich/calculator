import { handleOperand } from './handle-operand';

export const handleNum = (
	{ operator, operand1, setOperand1, operand2, setOperand2, setIsResult },
	num,
) => {
	if (operator === '') {
		handleOperand(operand1, setOperand1, num);
	} else {
		handleOperand(operand2, setOperand2, num);
	}

	setIsResult(false);
};
