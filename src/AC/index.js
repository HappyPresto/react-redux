import {INCREMENT, DELETE_ARTICLE, CHANGE_DATA_RANGE, CHANGE_SELECTION} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function changeDateRange(dataRange) {
    return {
        type: CHANGE_DATA_RANGE,
        payload: {dataRange}
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: {selected}
    }
}