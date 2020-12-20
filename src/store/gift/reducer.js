import { ADD_IN_BASKET } from "./types";
import { REMOVE_FROM_BASKET } from "./types";
import { DELETE_GIFT } from "./types";
import { gifts as allGifts } from "../../gifts";
import { addGiftInBasket, removeGiftFromBasket, deletePurchasedGift } from "./utils";

const initialState = {
  gifts: allGifts,
  basketList: [],
};

const handlers = {
  [ADD_IN_BASKET]: (state, action) => addGiftInBasket(state, action),
  [REMOVE_FROM_BASKET]: (state, action) => removeGiftFromBasket(state, action),
  [DELETE_GIFT]: (state, action) => deletePurchasedGift(state, action),
};

const gift = (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }

  return state;
};

export default gift;