import {
    GET_APARTMENTS_SUCCESS,
    GET_APARTMENTS_ERROR,
    GET_APARTMENTS_LOADING_IN_PROGRESS,
    Href_ApartmentController_GetAll
} from './apartmentIndexConstants.jsx';

import "isomorphic-fetch";

export function startReceivingApartments() {
    return {
        type: GET_APARTMENTS_LOADING_IN_PROGRESS
    };
}

export function receiveApartments(data) {
    return {
        type: GET_APARTMENTS_SUCCESS,
        apartmentsInfo: data
    };
}

export function errorReceiveApartments(err) {
    return {
        type: GET_APARTMENTS_ERROR,
        error: err
    };
}

export function getApartments() {

    return (dispatch) => {
        dispatch(startReceivingApartments());
        fetch(Href_ApartmentController_GetAll)
            .then((response) => {
                var parsedJson = response.json();
                return parsedJson;
            }).then((data) => {
                dispatch(receiveApartments(data));
            }).catch((ex) => {
                dispatch(errorReceiveApartments(ex));
            });
    };
}