const initialState = {
    menu: [],
    loading: true,
    error: null
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'FETCH_MENU_REQUEST':
            return {
                menu: [],
                loading: true,
                error: null
            };
        case 'FETCH_MENU_SUCCESS':
            return {
                menu: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_MENU_FAILURE':
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