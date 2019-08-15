const initialState = {
    name: "",
    image: {
        url: ""
    },
    publisher: ""
}

export function characterReducer(state = initialState, action) {
    console.log('reducer', state, action);
    let newState = { ...state };
    switch (action.type) {
        case 'UPDATE_DETAIL':
            return newState = { ...state, ...action.payload };
        default:
            return newState
    }
}