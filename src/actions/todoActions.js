const taskAdd = (description) => {
	return {
		payload: {
			description
		},
		type: 'TODO_ADD'
	};
};

const taskDelete = (id) => {
	return {
		payload: {
			id
		},
		type: 'TODO_DELETE'
	};
};

const taskDone = (id) => {
	return {
		payload: {
			id
		},
		type: 'TODO_DONE'
	};
};

const taskNotDone = (id) => {
	return {
		payload: {
			id
		},
		type: 'TODO_NOT_DONE'
	};
};

export default {
	taskAdd,
	taskDelete,
	taskDone,
	taskNotDone
}
