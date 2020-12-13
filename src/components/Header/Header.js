import React from 'react';
import logo from "../../img/logo.png";
import styles from './header.module.css'; 
import { Link } from "react-router-dom";
import ThemeContext from "../../utils/ThemeContext";

const sections = [
  { title: 'Что подарить?', href: '/what' },
  { title: 'Как купить', href: '/how' },
  { title: 'Доставка', href: '/deliver' },
  { title: 'Корзина', href: '/basket-list' }
];

const Header = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const style = {
    display: 'contents',
    color: 'white',
    cursor: 'pointer'
  };
  return (
    <div className={styles.header}>
      <a href="/">
        <div className={styles.logo_block}>
          <div className={styles.logo}><img src={logo} alt="logo"/></div>
          <h1>GiftsStore</h1>
        </div>
      </a>
      <ul>
        {sections.map (({ title, href }) => (
          <Link to={href}>
            <span>{title}</span>
          </Link>
        ))}
      </ul>
      <button onClick={toggleTheme} style={style}>
        Сменить тему
      </button>
    </div>
  )
}

export default Header;