const initialState = {
    apartmentsInfo: [
        { id: 1, houseId: 1, floor: 3, roomAmount: 2, price: 2500000, livingSpace: 33.2 },
        { id: 2, houseId: 2, floor: 15, roomAmount: 3, price: 7800000, livingSpace: 76.5 },
        { id: 3, houseId: 2, floor: 6, roomAmount: 1, price: 3850000, livingSpace: 48.4 }
    ]
};

export default function apartments(state = initialState, action) {
    return state;
}