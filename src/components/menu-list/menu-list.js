import MenuListItem from "../menu-list-item";
import React from "react";

const MenuList = ({menuList}) => {
    return (
        <ul className="menu__list">
            {
                menuList.map((menuItem) => {
                    return (
                        <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                    )
                })
            }

        </ul>
    )
};

export default MenuList;