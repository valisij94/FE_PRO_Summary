
const modalActions = {
    SHOW_MODAL: 'SHOW_MODAL',
    HIDE_MODAL: 'HIDE_MODAL',
};

// Action creator
export const showModal = () => ( { type: modalActions.SHOW_MODAL } );
export const hideModal = () => ( { type: modalActions.HIDE_MODAL } );

export const modalReducer = ( state = false, action) => {
    switch (action.type) {
        case modalActions.SHOW_MODAL : {
            return true;
        }
        case modalActions.HIDE_MODAL : {
            return false;
        }
        default: return state;
    }
}