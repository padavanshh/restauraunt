import React from 'react';
import './cart-table.scss';
import {connect} from "react-redux";
import {allRemoveFromCart, dishAddedToCart, dishRemoveFromCart} from "../../actions";

const CartTable = ({items, onDelete, onIncrease, onDecrease}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map((item) => {
                        const {url, title, id, price, count} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-count">{count}</div>
                                <div className="cart__item-price">{price}$</div>
                                <button onClick={() => onDecrease(id)} className="cart__dec">-</button>
                                <button onClick={() => onIncrease(id)} className="cart__inc">+</button>
                                <div onClick={() => onDelete(id)} className="cart__close">&times;</div>
                            </div>)
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = (state)=> {
    return {
        items: state.items
    }
};

const mapDispatchToProps = {
        onIncrease: dishAddedToCart,
        onDecrease: dishRemoveFromCart,
        onDelete: allRemoveFromCart
}


export default connect(mapStateToProps, mapDispatchToProps)(CartTable);