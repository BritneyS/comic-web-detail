const UPDATE_DETAIL = "UPDATE_DETAIL"

export function actionCreator(character) {
    console.log(`🌈 Action creator called: ${character.name}`)
    return {
        type: UPDATE_DETAIL,
        payload: character
    }
}