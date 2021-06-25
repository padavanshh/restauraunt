import MenuListItem from "../menu-list-item";
import React from "react";

const MenuList = ({menuList, onAddedToCart}) => {
    return (
        <ul className="menu__list">
            {
                menuList.map((menuItem) => {
                    return (
                        <MenuListItem key={menuItem.id}
                                      menuItem={menuItem}
                                      onAddedToCart={() => onAddedToCart(menuItem.id)}/>
                    )
                })
            }

        </ul>
    )
};

export default MenuList;