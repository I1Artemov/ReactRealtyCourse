import {
    GET_HOUSE_SUCCESS,
    GET_HOUSE_ERROR,
    GET_HOUSE_LOADING_IN_PROGRESS,
    Href_HouseController_GetSingle
} from './houseReadConstants.jsx';

import "isomorphic-fetch";

export function startReceivingHouse() {
    return {
        type: GET_HOUSE_LOADING_IN_PROGRESS
    };
}

export function receiveHouse(data) {
    return {
        type: GET_HOUSE_SUCCESS,
        houseInfo: data.houseInfo
    };
}

export function errorReceiveHouse(err) {
    return {
        type: GET_HOUSE_ERROR,
        error: err
    };
}

export function getHouse(id) {

    return (dispatch) => {
        let queryTrailer = '?id=' + id;

        dispatch(startReceivingHouse());
        fetch(Href_HouseController_GetSingle + queryTrailer)
            .then((response) => {
                var parsedJson = response.json();
                return parsedJson;
            }).then((data) => {
                dispatch(receiveHouse(data));
            }).catch((ex) => {
                dispatch(errorReceiveHouse(ex));
            });
    };
}