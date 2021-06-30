import {
    GET_APARTMENT_SUCCESS,
    GET_APARTMENT_ERROR,
    GET_APARTMENT_LOADING_IN_PROGRESS,
    Href_ApartmentController_GetSingle
} from './apartmentReadConstants.jsx';

import "isomorphic-fetch";

export function startReceivingApartment() {
    return {
        type: GET_APARTMENT_LOADING_IN_PROGRESS
    };
}

export function receiveApartment(data) {
    return {
        type: GET_APARTMENT_SUCCESS,
        apartmentInfo: data.apartmentInfo
    };
}

export function errorReceiveApartment(err) {
    return {
        type: GET_APARTMENT_ERROR,
        error: err
    };
}

export function getApartment(id) {

    return (dispatch) => {
        let queryTrailer = '?id=' + id;

        dispatch(startReceivingApartment());
        fetch(Href_ApartmentController_GetSingle + queryTrailer)
            .then((response) => {
                var parsedJson = response.json();
                return parsedJson;
            }).then((data) => {
                dispatch(receiveApartment(data));
            }).catch((ex) => {
                dispatch(errorReceiveApartment(ex));
            });
    };
}