import * as Actiontypes from "./ActionTypes";
import {LEADERS} from '../shared/leaders';

export const Leaders = (state={isLoading: false, errMess: null, leaders: LEADERS}, action)=>{
    switch (action.type){
        default:
            return state;
        {/*
        case Actiontypes.LEADERS_LOADING:
            return {...state , isLoading: true, errMess : null, leaders: []};

        case Actiontypes.LEADERS_FAILED:
            return {...state , isLoading: false, errMess : action.payload};

        case Actiontypes.ADD_LEADERS:
            return {...state , isLoading: false, errMess : null, leaders: action.payload};
        
        */}
        
    }
}