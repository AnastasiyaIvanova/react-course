import { CHANGE_ACTIVE_BLOCK } from "./types";

const changeActiveBlock = (blockName) => ({
  type: CHANGE_ACTIVE_BLOCK,
  blockName,
});

export { changeActiveBlock };