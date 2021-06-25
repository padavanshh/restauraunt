import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';

import {connect} from "react-redux";
import WithRestoService from "../hoc";
import {menuLoaded, menuRequested, menuError, dishAddedToCart} from "../../actions";
import Spinner from "../spinner";

import './menu-list.scss';
import Error from "../error";
import MenuList from "./menu-list";

class MenuListContainer extends Component {

    componentDidMount() {
        const {RestoService, menuLoaded, menuRequested, menuError} = this.props;
        menuRequested();
        RestoService.getMenu()
            .then((res) => menuLoaded(res))
            .catch((err) => menuError(err))
    };

    render() {
        const {menuList, loading, error, onAddedToCart} = this.props

        if (loading) {
            return <Spinner/>
        };

        if (error) {
            return <Error/>
        };

        return <MenuList menuList={menuList}
                         onAddedToCart={onAddedToCart}/>
    }
};



const mapStateToProps = (state) => {
    return {
        menuList: state.menu,
        loading: state.loading
    }
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    onAddedToCart: dishAddedToCart
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuListContainer));