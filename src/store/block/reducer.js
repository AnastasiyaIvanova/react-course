import { CHANGE_ACTIVE_BLOCK } from "./types";

const initialState = {
  blocks: ["С вашим текстом", "Для него", "Для неё"],
  activeBlock: "С вашим текстом",
};

const handlers = {
  [CHANGE_ACTIVE_BLOCK]: (state, action) => ({
    ...state,
    activeBlock: action.blockName,
  }),
};

const block = (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }

  return state;
};

export default block;