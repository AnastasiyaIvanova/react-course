import React from 'react';
import styles from './main.module.css'; 
import ThemeContext from "../../utils/ThemeContext";
import { gifts } from "./gifts";

const blocks = ["С вашим текстом", "Для него", "Для неё"];

const Main = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    const [activeBlock, setActiveBlock] = React.useState("С вашим текстом");
    const light = { color: 'black' };
    const dark = { color: 'white' };
    return (
        <div className={styles.main} style={theme === "light" ? light : dark}>
            <ul>
                {blocks.map((block) => (
                    <li onClick={() => setActiveBlock(block)} className={activeBlock === block ? styles.choose : styles.li}>{block}</li>
                ))}
            </ul>
            <div className={styles.images_block}>
                {gifts.filter(gift => gift.section === activeBlock).map(filteredGift => (
                    <div>
                        <div style={{overflow:"hidden"}}><img src={filteredGift.giftImage} alt={filteredGift.name} /></div>
                        <p>{filteredGift.name}</p>
                        <h3>{filteredGift.price}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Main;