import { Dispatch } from "redux"
import { ActionType } from "../actions/ActionTypes"
import axios from "axios"

export const fetchData = () => {
    return async (dispatch: Dispatch<any>) => {
        try {
            const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
            dispatch({  
                type: ActionType.FETCH_DATA_SUCCESS,
                payload: response.data
            });
        } catch (error:any) {
            dispatch({
                type: ActionType.FETCH_DATA_ERROR,  
                payload: error.message
            });
        }
    };
};

export const postData = (data:string) => {
    return async (dispatch: Dispatch<any>) => {
        try {
            const response = await axios.post("https://httpbin.org/post", data);
            dispatch({  
                type: ActionType.POST_DATA_SUCCESS,
                payload: response.data
            });
        } catch (error:any) {
            console.log("error occured")
            dispatch({
                type: ActionType.POST_DATA_ERROR,  
                payload: error.message
            });
        }
    };
};