const menuRequested = () => {
    return {
        type: 'FETCH_MENU_REQUEST'
    }
};

const menuLoaded = (newMenu) => {
    return {
        type: 'FETCH_MENU_SUCCESS',
        payload: newMenu
    };
};

const menuError=(newError)=>{
    return {
        type: 'FETCH_MENU_FAILURE',
        payload: newError
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError
};