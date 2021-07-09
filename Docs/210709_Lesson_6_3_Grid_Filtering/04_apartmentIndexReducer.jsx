import {
    GET_APARTMENTS_SUCCESS,
    GET_APARTMENTS_ERROR,
    GET_APARTMENTS_LOADING_IN_PROGRESS,
    SET_MIN_PRICE,
    SET_MAX_PRICE,
    SET_ADDRESS_PART,
    CLEAR_SEARCH_PARAMETERS
} from './apartmentIndexConstants.jsx';

const initialState = {
    apartmentsInfo: [
        { id: 1, houseId: 1, floor: null, roomAmount: null, price: null, livingSpace: null }
    ],
    isLoading: false,
    error: null,
    totalCount: 0,
    minPrice: null,
    maxPrice: null,
    addressPart: null
};

export default function apartments(state = initialState, action) {
    switch (action.type) {
        case GET_APARTMENTS_LOADING_IN_PROGRESS:
            return { ...state, isLoading: true };

        case GET_APARTMENTS_SUCCESS:
            return { ...state, apartmentsInfo: action.apartmentsInfo, error: '', isLoading: false, totalCount: action.totalCount };

        case GET_APARTMENTS_ERROR:
            return { ...state, error: action.error, isLoading: false };

        case SET_MIN_PRICE:
            return { ...state, minPrice: action.payload };

        case SET_MAX_PRICE:
            return { ...state, maxPrice: action.payload };

        case SET_ADDRESS_PART:
            return { ...state, addressPart: action.payload };

        case CLEAR_SEARCH_PARAMETERS:
            return { ...state, minPrice: null, maxPrice: null, addressPart: null };

        default:
            return state;
    }
}