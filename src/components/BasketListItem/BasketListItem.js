import React from 'react';
import styles from '../Main/main.module.css'; 
import { useDispatch } from "react-redux";

const BasketListItem = ({ basket, addGiftInBasket, removeGiftFromBasket, deletePurchasedGift }) => {
  const {  name, price, giftImage, count, id } = basket;
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{overflow:"hidden"}}><img src={giftImage} alt={name} /></div>
        <p>{name}</p>
      <h3>Цена: {price}</h3>
      <div style={{marginBottom:"10px"}}>
        <button className={styles.button_basket} onClick={() => dispatch(addGiftInBasket(id))}>+</button>
        <span>{count}</span>
        <button className={styles.button_basket} onClick={() => dispatch(removeGiftFromBasket(id))}>-</button>
      </div>
      <button className="cart-list-item__delete" onClick={() => dispatch(deletePurchasedGift(id))}>Удалить</button>
    </div>
  )
};

export default BasketListItem;