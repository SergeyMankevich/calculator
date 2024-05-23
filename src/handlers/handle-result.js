export const handleResult = ({
	operand1,
	setOperand1,
	operator,
	setOperator,
	operand2,
	setOperand2,
	setIsResult,
}) => {

	setOperator('');
	setOperand2('');
	setIsResult(true);

	if (operand2 === '') {
		setOperand1(Number(operand1));

		return;
	}

	switch (operator) {
		case '+': {
			setOperand1(Number(operand1) + Number(operand2));

			break;
		}
		case '-': {
			setOperand1(Number(operand1) - Number(operand2));

			break;
		}
		default:
		// 	ничего не делать
	}
};
