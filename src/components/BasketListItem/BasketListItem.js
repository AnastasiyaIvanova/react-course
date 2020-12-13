import React from 'react';
import styles from '../Main/main.module.css'; 

const BasketListItem = ({ basket, addGiftInBasket, removeGiftFromBasket, deletePurchasedGift }) => {
  const {  name, price, giftImage, count, id } = basket;
  console.log(giftImage);

  return (
    <div>
      <div style={{overflow:"hidden"}}><img src={giftImage} alt={name} /></div>
        <p>{name}</p>
      <h3>Цена: {price}</h3>
      <div style={{marginBottom:"10px"}}>
        <button className={styles.button_basket} onClick={() => addGiftInBasket(id)}>+</button>
        <span>{count}</span>
        <button className={styles.button_basket} onClick={() => removeGiftFromBasket(id)}>-</button>
      </div>
      <button className="cart-list-item__delete" onClick={() => deletePurchasedGift(id)}>Удалить</button>
    </div>
  )
};

export default BasketListItem;