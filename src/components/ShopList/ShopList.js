import React from 'react';
import ShopListItem from "../ShopListItem";
import styles from '../Main/main.module.css'; 

const ShopList = ({ gifts, addGiftInBasket }) => {
  return (
    <div className={styles.images_block}>
      {
        gifts.map((gift) => {
          const { id } = gift;

          return (
            <div key={id.toString()}
              onClick={() => addGiftInBasket(id)}
            >
              <ShopListItem gift={gift} />
            </div>
          )
        })
      }
    </div>
  )
};

export default ShopList;