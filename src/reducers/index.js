const initialState = {
    menu: [],
    loading: true,
    error: null,
    items: [],
    total: 50
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'FETCH_MENU_REQUEST':
            return {
                ...state,
                menu: [],
                loading: true,
                error: null
            };
        case 'FETCH_MENU_SUCCESS':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_MENU_FAILURE':
            return {
                ...state,
                menu:[],
                loading: false,
                error: action.payload
            };
        case 'ADDED_TO_CART':
            const dishId = action.payload
            const dish = state.menu.find((item)=>item.id===dishId)
            const newItem = {
                title: dish.title,
                price: dish.price,
                url: dish.url,
                category: dish.category,
                id: dish.id
            }
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            }
        default :
            return state;
    }
};

export default reducer;