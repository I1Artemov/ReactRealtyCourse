const initialState = {
    housesInfo: [
        { id: 1, address: 'Some address', buildYear: 1986, wallMaterial: 'brick', maxFloor: 9 },
        { id: 2, address: 'Russia, Ekaterinburg, 42, Victory st.', buildYear: 2010, wallMaterial: 'concrete', maxFloor: 25 }
    ],
};

export default function houses(state = initialState, action) {
    return state;
}