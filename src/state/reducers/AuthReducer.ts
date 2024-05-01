import { ActionType } from "../actions/ActionTypes";
// import { Action } from "../actions";

const initialState: object = {};

const reducer = (state: object = initialState, action: any): object => {
    switch (action.type) {
        case ActionType.FETCH_DATA_SUCCESS:
            return action.payload;
        case ActionType.POST_DATA_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
