import produce from "immer"

const initialState = {
    data: [],
}

const AJOUTDATA = "addData"

/**
 * Action creator to add Data
 * @param {object} data
 * @returns void
 */
export const addData = (data) => ({
    type: AJOUTDATA,
    payload: data,
})

/**
 * Reducer for redux store
 * @param {object} state
 * @param {function} action
 * @returns
 */
export default function dataReducer(state = initialState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case AJOUTDATA: {
                draft.data = []
                draft.data.push(action.payload)
                return
            }
            default:
                return
        }
    })
}
