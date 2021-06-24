const initialState = {
    menu: [],
    loading: true,
    error: null,
    items: [
        {
            "title": "Cesar salad",
            "price": 12,
            "url": "https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg",
            "category": "salads",
            "id": 1
        },
        {
            "title": "Pizza Margherita",
            "price": 10,
            "url": "https://www.ricettedalmondo.it/images/foto-ricette/p/17500-pizza-margherita.jpg",
            "category": "pizza",
            "id": 2
        }
    ],
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
            }
        default :
            return state;
    }
};

export default reducer;