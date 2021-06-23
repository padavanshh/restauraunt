const initialState = {
    menu: [],
    loading: true,
    error: null
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'MENU_REQUESTED':
            return {
                menu: [],
                loading: true,
                error: null
            };
        case 'MENU_LOADED':
            return {
                menu: action.payload,
                loading: false,
                error: null
            };
        case 'MENU_ERROR':
            return {
                menu:[],
                loading: false,
                error: action.payload
            }
        default :
            return state;
    }
};

export default reducer;