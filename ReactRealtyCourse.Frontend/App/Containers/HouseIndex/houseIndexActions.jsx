import {
    GET_HOUSES_SUCCESS,
    GET_HOUSES_ERROR,
    GET_HOUSES_LOADING_IN_PROGRESS,
    Href_HouseController_GetAll
} from './houseIndexConstants.jsx';

import "isomorphic-fetch";

export function startReceivingHouses() {
    return {
        type: GET_HOUSES_LOADING_IN_PROGRESS
    };
}

export function receiveHouses(data) {
    return {
        type: GET_HOUSES_SUCCESS,
        housesInfo: data
    };
}

export function errorReceiveHouses(err) {
    return {
        type: GET_HOUSES_ERROR,
        error: err
    };
}

export function getHouses() {

    return (dispatch) => {
        dispatch(startReceivingHouses());
        fetch(Href_HouseController_GetAll)
            .then((response) => {
                var parsedJson = response.json();
                return parsedJson;
            }).then((data) => {
                dispatch(receiveHouses(data));
            }).catch((ex) => {
                dispatch(errorReceiveHouses(ex));
            });
    };
}