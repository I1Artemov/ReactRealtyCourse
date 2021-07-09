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
        apartmentsInfo: data.apartmentsInfo,
        totalCount: data.totalCount
    };
}

export function errorReceiveApartments(err) {
    return {
        type: GET_APARTMENTS_ERROR,
        error: err
    };
}

export function getApartments(pagination) {
    let targetPage = !pagination.current ? 1 : pagination.current;
    let pageSize = !pagination.pageSize ? 10 : pagination.pageSize;

    return (dispatch) => {
        let queryTrailer = '?page=' + targetPage + '&pageSize=' + pageSize;

        dispatch(startReceivingApartments());
        fetch(Href_ApartmentController_GetAll + queryTrailer)
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