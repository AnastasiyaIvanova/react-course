import React from 'react';
import styles from './style.module.css'; 
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import ThemeContext from "./utils/ThemeContext";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {

    const [theme, setTheme] = React.useState("light");

    const toggleTheme = () => {
      if (theme === "light") {
        setTheme("dark");
        return;
      }

      setTheme("light");
    };
    const light = { backgroundColor: 'aliceblue' };
    const dark = { backgroundColor: '#003139'};
    return (
      <BrowserRouter>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className="App">
            <div className={styles.wrapper} style={theme === "light" ? light : dark}>
              <Header />
              <Switch>
                <Route path='/main' component={Main} />
                <Route path='/basket' component={Basket} />
                <Redirect from='/' to='/main'/>
              </Switch>
            </div>
          </div>
        </ThemeContext.Provider>
      </BrowserRouter>
        
    );
}

export default App;
