import React, { Component } from "react";
import styles from "./style.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ThemeContext from "./utils/ThemeContext";
import { BrowserRouter } from "react-router-dom";
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

class App extends Component {
  state = {
    basketList: [],
    theme: "light",
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
                <Main />
              </div>
            </div>
          </ThemeContext.Provider>
        </StoreProvider>
      </BrowserRouter>
    );
  }
}

export default App;
