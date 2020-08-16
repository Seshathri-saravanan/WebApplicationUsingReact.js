import * as ActionTypes from './ActionTypes';
import {PROMOTIONS} from '../shared/promotions';
export const Promotions = (state  = { isLoading: false,
                                        errMess: null,
                                        promotions:PROMOTIONS}, action) => {
    switch (action.type) {
        default:
          return state;
        {/*
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []}

        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        */}
        
      }
};