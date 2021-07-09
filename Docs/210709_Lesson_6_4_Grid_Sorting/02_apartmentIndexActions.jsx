import {
    GET_APARTMENTS_SUCCESS,
    GET_APARTMENTS_ERROR,
    GET_APARTMENTS_LOADING_IN_PROGRESS,
    SET_MIN_PRICE,
    SET_MAX_PRICE,
    SET_ADDRESS_PART,
    CLEAR_SEARCH_PARAMETERS,
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

export function setMinPrice(ev) {
    let minPrice = ev;
    return {
        type: SET_MIN_PRICE,
        payload: minPrice
    };
}

export function setMaxPrice(ev) {
    let maxPrice = ev;
    return {
        type: SET_MAX_PRICE,
        payload: maxPrice
    };
}

export function setAddressPart(ev) {
    let addressPart = ev.target.value;
    return {
        type: SET_ADDRESS_PART,
        payload: addressPart
    };
}

export function clearSearchParameters() {
    return {
        type: CLEAR_SEARCH_PARAMETERS
    };
}

export function getApartments(pagination, sorting, minPrice, maxPrice, addressPart) {
    let targetPage = !pagination.current ? 1 : pagination.current;
    let pageSize = !pagination.pageSize ? 10 : pagination.pageSize;

    return (dispatch) => {
        let queryTrailer = '?page=' + targetPage + '&pageSize=' + pageSize;
        if (minPrice !== null && minPrice !== undefined) queryTrailer += '&minPrice=' + minPrice;
        if (maxPrice !== null && maxPrice !== undefined) queryTrailer += '&maxPrice=' + maxPrice;
        if (addressPart !== null && addressPart !== undefined) queryTrailer += '&addressPart=' + addressPart;
        if (sorting !== null && addressPart !== undefined) {
            if (sorting.field !== null && sorting.field !== undefined) queryTrailer += '&sortField=' + sorting.field;
            if (sorting.order !== null && sorting.order !== undefined) queryTrailer += '&sortOrder=' + sorting.order;
        }

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