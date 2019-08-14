const initialState = {
    name: "",
    image: {
        url: ""
    },
    publisher: ""
}

const data = {
    name: 'superman',
    image: {
        url: '/images/superman.jpg'
    },
    publisher: 'DC Comics'
}

const action = {
    type: "UPDATE_DETAIL",
    payload: data
}

export function characterReducer(state = initialState, action) {
    console.log('reducer', state, action);
    let newState = { ...state };
    switch (action.type) {
        case 'UPDATE_DETAIL':
            return newstate = { ...state, ...action.payload };
        default:
            return newState
    }
}