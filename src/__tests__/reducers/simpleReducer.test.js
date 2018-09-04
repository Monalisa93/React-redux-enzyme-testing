import request from '../../reducers/simpleReducer'

describe('Simple Reducer', () => {
    it('has a default state', () => {
        expect(request(undefined, {type:'unexpected'})).toEqual({
            fetchingRequest: false
        });
    });

    // it('can handle SIMPLE_ACTION', () => {
    //     expect(request(undefined, {
    //         type: SIMPLE_ACTION,
    //         payload: {
    //             fetchingRequest: true
    //         }
    //     })).toEqual({
    //         fetchingRequest: true
    //     })
    // })
});