export const ADD_EXAMPLE_ACTION = 'ADD_EXAMPLE_ACTION';
export const DELETE_LAST_NUMBER_ACTION = 'DELETE_LAST_NUMBER_ACTION';

export const addExampleAction = (num) => {
    return {
        type: ADD_EXAMPLE_ACTION,
        number: num
    }
}

export const deleteLastNumberAction = () => {
    return (dispatch, getState) => {
        const { number } = getState();
        if (number.length > 0) {
            console.log("deleting: ", number[number.length - 1]);
            dispatch({type: DELETE_LAST_NUMBER_ACTION});
        }
    }
}