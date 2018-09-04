import * as actions from '../actions/simpleActions.test';

describe('actions', () => {
    it('should create an action', () => {
        const text = 'SIMPLE_ACTION';
        const expectedAction = {
            type: 'SIMPLE_ACTION'
        };
        expect(text).toEqual(expectedAction)
    })
});