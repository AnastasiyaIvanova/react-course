import React from 'react';

const ShopListItem = ({ gift }) => {
  const { name, price, giftImage } = gift

  return (
    <div>
      <div style={{overflow:"hidden"}}><img src={giftImage} alt={name} /></div>
        <p>{name}</p>
      <h3>Цена: {price}</h3>
      <button className="button">Купить</button>
    </div>
  )
};

export default ShopListItem;