const initialState = {
    houseInfo: {id: 1, address: 'Some address', buildYear: 1986, wallMaterial: 'brick', maxFloor: 9},
};

export default function flat(state = initialState, action) {
    return state;
}