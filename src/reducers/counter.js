import { COUNTMINUS, COUNTPLUS } from "../actions";

const initialState = { val: 0 }

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case COUNTPLUS:
            return { val: state.val + 1 }
        case COUNTMINUS:
            return { val: state.val - 1 }
        default:
            return state
    }
}