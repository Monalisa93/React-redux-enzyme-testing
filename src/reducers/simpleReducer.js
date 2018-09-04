/*
Reducers describe how application state changes wrt actions dispatched to redux store
*/

export default function request (state = {fetchingRequest: false}, action) {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            return{
                result: action.payload
            };
        default:
            return state
    }
}