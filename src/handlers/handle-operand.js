export const handleOperand = (operandValue, operandSetter, num) => {
	if (operandValue === '0') {
		if (num === '0') {
			return;
		}

		operandSetter(num);
	} else {
		operandSetter(operandValue + num);
	}
};
