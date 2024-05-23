import {
	handleMinus,
	handleNum,
	handlePlus,
	handleReset,
	handleResult,
} from './handlers';

export const buttons = [
	{ id: '7', name: '7', group: 'left', handler: handleNum, },
	{ id: '8', name: '8', group: 'left', handler: handleNum, },
	{ id: '9', name: '9', group: 'left', handler: handleNum, },
	{ id: '6', name: '6', group: 'left', handler: handleNum, },
	{ id: '5', name: '5', group: 'left', handler: handleNum, },
	{ id: '4', name: '4', group: 'left', handler: handleNum, },
	{ id: '3', name: '3', group: 'left', handler: handleNum, },
	{ id: '2', name: '2', group: 'left', handler: handleNum, },
	{ id: '1', name: '1', group: 'left', handler: handleNum, },
	{ id: '0', name: '0', group: 'left', handler: handleNum, },
	{ id: 'C', name: 'C', group: 'right', handler: handleReset, },
	{ id: '+', name: '+', group: 'right', handler: handlePlus, },
	{ id: '-', name: '-', group: 'right', handler: handleMinus, },
	{ id: '=', name: '=', group: 'right', handler: handleResult, },
]
