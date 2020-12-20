const updateGiftList = (basketList, newGift, index) => {
  if (newGift.count === 0) {
    return [...basketList.slice(0, index), ...basketList.slice(index + 1)];
  }

  if (index === -1) {
    return [...basketList, newGift];
  }

  return [
    ...basketList.slice(0, index),
    newGift,
    ...basketList.slice(index + 1),
  ];
};

const updateGift = (getGift, giftInCart, quantity) => {
  if (giftInCart) {
    return {
      ...giftInCart,
      price: giftInCart.price + quantity * getGift.price,
      count: giftInCart.count + quantity,
    };
  }

  return {
    id: getGift.id,
    name: getGift.name,
    giftImage: getGift.giftImage,
    price: getGift.price,
    count: 1,
  };
};

const addGiftInBasket = (state, action) => {
  const { basketList } = state;
  const id = action.giftID;

  const getGift = state.gifts.find((gift) => gift.id === id);
  const getGiftIndex = basketList.findIndex((gift) => gift.id === id);
  const giftInCart = basketList[getGiftIndex];

  const newGift = updateGift(getGift, giftInCart, 1);
  const newArray = updateGiftList(basketList, newGift, getGiftIndex);

  return {
    ...state,
    basketList: newArray,
  };
};

const removeGiftFromBasket = (state, action) => {
  const { basketList } = state;
  const id = action.giftID;

  const getGift = state.gifts.find((gift) => gift.id === id);
  const getGiftIndex = basketList.findIndex((gift) => gift.id === id);
  const giftInCart = basketList[getGiftIndex];

  const newGift = updateGift(getGift, giftInCart, -1);
  const newArray = updateGiftList(basketList, newGift, getGiftIndex);

  return {
    ...state,
    basketList: newArray,
  };
};

const deletePurchasedGift = (state, action) => {
  const { basketList } = state;
  const id = action.giftID;

  const getGift = state.gifts.find((gift) => gift.id === id);
  const getGiftIndex = basketList.findIndex((gift) => gift.id === id);
  const giftInCart = basketList[getGiftIndex];

  const newGift = updateGift(getGift, giftInCart, -giftInCart.count);
  const newArray = updateGiftList(basketList, newGift, getGiftIndex);

  return {
    ...state,
    basketList: newArray,
  };
};

export { addGiftInBasket, removeGiftFromBasket, deletePurchasedGift } ;
