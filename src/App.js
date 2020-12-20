import React, { Component } from "react";
import styles from "./style.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ThemeContext from "./utils/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { gifts } from "./gifts";
import { Provider as StoreProvider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store';


const logger = (store) => (next) => (action) => {
  const { type, ...restPayload } = action;
  console.log({ type, payload: restPayload });
  return next(action);
};

const logger2 = (store) => (next) => (action) => {
  console.log("Второй лог");
  return next(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(logger, logger2)
);

const updateGiftList = (basketList, newGift, index) => {
  if (newGift.count === 0) {
    return [...basketList.slice(0, index), ...basketList.slice(index + 1)];
  }

  if (index === -1) {
    return [...basketList, newGift];
  }

  return [...basketList.slice(0, index), newGift, ...basketList.slice(index + 1)];
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

class App extends Component {
  state = {
    basketList: [],
    theme: "light",
  };

  addGiftInBasket = (id) => {
    const { basketList } = this.state;

    this.setState(() => {
      const getGift = gifts.find((gift) => gift.id === id);
      const getGiftIndex = basketList.findIndex((gift) => gift.id === id);
      const giftInCart = basketList[getGiftIndex];

      const newGift = updateGift(getGift, giftInCart, 1);
      const newArray = updateGiftList(basketList, newGift, getGiftIndex);

      return {
        basketList: newArray,
      };
    });
  };

  removeGiftFromBasket = (id) => {
    const { basketList } = this.state;

    this.setState(() => {
      const getGift = gifts.find((gift) => gift.id === id);
      const getGiftIndex = basketList.findIndex((gift) => gift.id === id);
      const giftInCart = basketList[getGiftIndex];

      const newGift = updateGift(getGift, giftInCart, -1);
      const newArray = updateGiftList(basketList, newGift, getGiftIndex);

      return {
        basketList: newArray
      };
    });
  };

  deletePurchasedGift = (id) => {
    const { basketList } = this.state;

    this.setState(() => {
      const getGift = gifts.find((gift) => gift.id === id);
      const getGiftIndex = basketList.findIndex((gift) => gift.id === id);
      const giftInCart = basketList[getGiftIndex];

      const newGift = updateGift(getGift, giftInCart, -giftInCart.count);
      const newArray = updateGiftList(basketList, newGift, getGiftIndex);

      return {
        basketList: newArray
      };
    });
  };
  render() {
    const toggleTheme = () => {
      if (this.state.theme === "light") {
        this.setState({ theme: "dark" });
        return;
      }

      this.setState({ theme: "light" });
    };
    const light = { backgroundColor: "aliceblue" };
    const dark = { backgroundColor: "#003139" };
    const theme = this.state.theme;
    return (
      <BrowserRouter>
        <StoreProvider store={store}>
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="App">
              <div
                className={styles.wrapper}
                style={theme === "light" ? light : dark}
              >
                <Header />
                <Main 
                  gifts={gifts} 
                  addGiftInBasket={this.addGiftInBasket} 
                  basketList={this.state.basketList} 
                  removeGiftFromBasket={this.removeGiftFromBasket}
                  deletePurchasedGift={this.deletePurchasedGift} 
                />
              </div>
            </div>
          </ThemeContext.Provider>
        </StoreProvider>
      </BrowserRouter>
    );
  }
}

export default App;
