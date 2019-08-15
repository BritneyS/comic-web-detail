const data = {
    name: 'superman',
    image: {
        url: '/images/superman.jpg'
    },
    publisher: 'DC Comics'
}

/*
Intended action:

const action = {
    type: "UPDATE_DETAIL",
    payload: data
}
*/

export function actionCreator(actionType) {
    return {
        type: actionType,
        payload: data
    }
}