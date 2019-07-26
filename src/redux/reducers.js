const initialState = {
    name: "",
    image: {
        url: ""
    },
    publisher: ""
}


export function reducer(state = initialState, action) {
    console.log('reducer', state, action);
    return state;
}