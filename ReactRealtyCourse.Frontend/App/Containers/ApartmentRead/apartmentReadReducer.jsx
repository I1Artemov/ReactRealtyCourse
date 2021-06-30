import {
    GET_APARTMENT_SUCCESS,
    GET_APARTMENT_ERROR,
    GET_APARTMENT_LOADING_IN_PROGRESS
} from './apartmentReadConstants.jsx';

const initialState = {
    apartmentInfo: { id: 1, houseId: 1, floor: null, roomAmount: null, price: null, livingSpace: null },
    isLoading: false,
    error: null
};

export default function apartment(state = initialState, action) {
    switch (action.type) {
        case GET_APARTMENT_LOADING_IN_PROGRESS:
            return { ...state, isLoading: true };

        case GET_APARTMENT_SUCCESS:
            return { ...state, apartmentInfo: action.apartmentInfo, error: '', isLoading: false };

        case GET_APARTMENT_ERROR:
            return { ...state, error: action.error, isLoading: false };

        default:
            return state;
    }
}