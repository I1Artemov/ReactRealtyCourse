import {
    GET_HOUSE_SUCCESS,
    GET_HOUSE_ERROR,
    GET_HOUSE_LOADING_IN_PROGRESS
} from './houseReadConstants.jsx';

const initialState = {
    houseInfo: { id: 1, address: null, buildYear: null, wallMaterial: null, maxFloor: null },
    error: "",
    isLoading: false
};

export default function house(state = initialState, action) {
    switch (action.type) {
        case GET_HOUSE_LOADING_IN_PROGRESS:
            return { ...state, isLoading: true };

        case GET_HOUSE_SUCCESS:
            return { ...state, houseInfo: action.houseInfo, error: '', isLoading: false };

        case GET_HOUSE_ERROR:
            return { ...state, error: action.error, isLoading: false };

        default:
            return state;
    }
}