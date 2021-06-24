import React from 'react';
import './cart-table.scss';
import {connect} from "react-redux";

const CartTable = ({items, onDelete, onIncrease, onDecrease}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map((item) => {
                        const {url, title, id, price} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
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

const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => {
            console.log('increase '+ id)
        },
        onDecrease: (id) => {console.log('decrease '+ id)},
        onDelete: (id)=>{console.log('delete '+ id)}

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);