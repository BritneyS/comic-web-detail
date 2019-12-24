const UPDATE_DETAIL = "UPDATE_DETAIL"

export function actionCreator(character) {
    return {
        type: UPDATE_DETAIL,
        payload: character
    }
}