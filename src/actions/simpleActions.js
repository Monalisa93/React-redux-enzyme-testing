/* Learning Actions
Actions are payloads of info which send data to store
* */

export const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    })
};