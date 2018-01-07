

import {Map} from 'immutable';

const initState = Map({
    count: 0
});

const COUNT_VALUE_ADD = 'counter/COUNT_VALUE_ADD';
const COUNT_VALUE_SUB = 'counter/COUNT_VALUE_SUB';

export const countOperate = (type) => {
    return (dispatch) => {
        const _type = type === 'ADD' ? COUNT_VALUE_ADD : COUNT_VALUE_SUB;
        return dispatch(() => dispatch({
            type: _type,
            payload: { }
        }))
    }
}

export default function TestReducer(state = initState, action = {}){
    switch(action.type){
        case COUNT_VALUE_ADD:
            let _count = state.get('count');
            _count += 1;
            return state.set('count', _count);
        case COUNT_VALUE_SUB:
            let __count = state.get('count');
            __count -= 1;
            return state.set('count', __count);
        default: 
            return state;
    }
}