const initialState = {
    menu: [],
    loading: true,
    error: null,
    items: [],
    total: 50
};

const updateCartItems = (cartItems, item, idx) => {

    if (item.price === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
};

const updateItem = (dish, item = {}, value) => {

    const {
        title = dish.title,
        price = 0,
        url = dish.url,
        category = dish.category,
        id = dish.id
    } = item

    return {
        title,
        price: price + dish.price * value,
        url,
        category,
        id
    }
};

const updateOrder = (state, dishId, value) => {
    const dish = state.menu.find((item) => item.id === dishId);
    const itemIndex = state.items.findIndex(({id}) => id === dishId);
    const item = state.items[itemIndex];

    const newItem = updateItem(dish, item, value)
    return {
        ...state,
        items: updateCartItems(state.items, newItem, itemIndex)
    }
}

const reducer = (state = initialState, action) => {
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
                menu: [],
                loading: false,
                error: action.payload
            };
        case 'ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'REMOVE_FROM_CART':
            return updateOrder(state, action.payload, -1);
        case 'ALL_REMOVE_FROM_CART':
            const itemIndex = state.items.findIndex((item) => item.id === action.payload);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ]
            };
        default :
            return state;
    }
};

export default reducer;