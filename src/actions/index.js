const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = ()=>{
    return {
        type: 'MENU_REQUESTED'
    }
};

const menuError=(newError)=>{
    return {
        type: 'MENU_ERROR',
        payload: newError
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError
};