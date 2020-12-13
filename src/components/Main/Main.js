import React from "react";
import styles from "./main.module.css";
import ThemeContext from "../../utils/ThemeContext";
import { Route } from "react-router-dom";
import ShopList from "../ShopList";
import BasketList from "../BasketList";

const blocks = ["С вашим текстом", "Для него", "Для неё"];

const Main = ({ gifts, addGiftInBasket, basketList, deletePurchasedGift, removeGiftFromBasket }) => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const [activeBlock, setActiveBlock] = React.useState("С вашим текстом");
  const light = { color: "black" };
  const dark = { color: "white" };
  return (
    <div className={styles.main} style={theme === "light" ? light : dark}>
      <Route
        path="/"
        exact
        render={() => {
          return (
            <div style={{ display: "contents" }}>
              <ul>
                {blocks.map((block) => (
                  <li
                    onClick={() => setActiveBlock(block)}
                    className={
                      activeBlock === block ? styles.choose : styles.li
                    }
                  >
                    {block}
                  </li>
                ))}
              </ul>

              <ShopList
                gifts={gifts.filter((gift) => gift.section === activeBlock)}
                addGiftInBasket={addGiftInBasket}
              />
            </div>
          );
        }}
      />
      <Route
          path="/basket-list"
          exact
          render={() => {
            return (
              <BasketList
                basketList={basketList}
                addGiftInBasket={addGiftInBasket}
                removeGiftFromBasket={removeGiftFromBasket}
                deletePurchasedGift={deletePurchasedGift}
              />
            );
          }}
        />
    </div>
  );
};

export default Main;
