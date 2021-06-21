import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';

import './menu-list.scss';
import {connect} from "react-redux";
import WithRestoService from "../hoc";
import {menuLoaded} from "../../actions";
import Spinner from "../spinner";

class MenuList extends Component {

    componentDidMount() {
        const {RestoService}=this.props
         RestoService.getMenu()
            .then(res=>this.props.menuLoaded(res))
    }

    render() {
        const {menuList, loading} = this.props

        if (loading) {
            return <Spinner/>
        }
        return (
            <ul className="menu__list">
                {
                    menuList.map((menuItem)=>{
                        return (
                            <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                        )
                    })
                }

            </ul>
        )
    }
};

const mapStateToProps = (state)=>{
    return {
        menuList: state.menu,
        loading: state.loading
    }
};

const mapDispatchToProps = {
    menuLoaded
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));