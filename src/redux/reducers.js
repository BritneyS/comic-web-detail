const initialState = {
    name: "",
    image: {
        url: ""
    },
    publisher: ""
}

export function characterReducer(state = initialState, action) {
    console.log('🌹 reducer', state, action);
    let newState = { ...state };
    switch (action.type) {
        case 'UPDATE_DETAIL':
            newState = { ...state, ...action.payload };
            return newState;
        default:
            return newState
    }
}
