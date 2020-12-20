import React from 'react';
import ShopListItem from "../ShopListItem";
import styles from '../Main/main.module.css'; 
import { useDispatch } from "react-redux";

const ShopList = ({ gifts, addGiftInBasket }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.images_block}>
      {
        gifts.map((gift) => {
          const { id } = gift;

          return (
            <div key={id.toString()}
              onClick={() => dispatch(addGiftInBasket(id))}
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