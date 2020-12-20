import { ADD_IN_BASKET } from "./types";
import { REMOVE_FROM_BASKET } from "./types";
import { DELETE_GIFT } from "./types";

const addGiftInBasket = (giftID) => ({
  type: ADD_IN_BASKET,
  giftID,
});

const removeGiftFromBasket = (giftID) => ({
  type: REMOVE_FROM_BASKET,
  giftID,
});

const deletePurchasedGift = (giftID) => ({
  type: DELETE_GIFT,
  giftID,
});

export { addGiftInBasket, removeGiftFromBasket, deletePurchasedGift };