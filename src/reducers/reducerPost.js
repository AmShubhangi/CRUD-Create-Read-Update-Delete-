import { FETCH_POST, FETCH_SINGLE_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);

        case FETCH_SINGLE_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };

        case FETCH_POST:
            return _.map(action.payload.data);
            
        default:
            return state;
    }
}