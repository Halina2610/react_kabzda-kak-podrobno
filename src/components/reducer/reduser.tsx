type ActionType = {
    type: string
}

export const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

type StateType = {
    collapsed: boolean
}
/*const reducer = (state: StateType, action: ActionType) => {
    return action.type === TOGGLE_CONSTANT ? !state : state;
}*/
export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANT :
            return !state;
        default:
            throw new Error(" Bad action type")
    }
    return state;
}
