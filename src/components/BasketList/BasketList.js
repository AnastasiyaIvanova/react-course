import React from "react";
import BasketListItem from "../BasketListItem";
import styles from '../Main/main.module.css';

const BasketList = ({
  basketList,
  addGiftInBasket,
  removeGiftFromBasket,
  deletePurchasedGift
}) => {
  return (
    <div className={styles.images_block}>
      {basketList.map((basket) => {
        const { id } = basket;

        return (
          <div key={id}>
            <BasketListItem
              basket={basket}
              addGiftInBasket={addGiftInBasket}
              removeGiftFromBasket={removeGiftFromBasket}
              deletePurchasedGift={deletePurchasedGift}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BasketList;