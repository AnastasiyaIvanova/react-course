import React from 'react';
import gifts from "./gifts.json";
import styles from './main.module.css'; 

const blocks = ["Персональные подарки с вашим текстом", "Для него", "Для неё"];

const Main = () => {
    const [activeBlock, setActiveBlock] = React.useState("Персональные подарки с вашим текстом");
    return (
        <div className={styles.main}>
            <ul>
                {blocks.map((block) => (
                    <li onClick={() => setActiveBlock(block)} className={activeBlock === block ? styles.choose : styles.li}>{block}</li>
                ))}
            </ul>
            <div>
                {gifts.map((gift) => (
                    <img src={gift.giftImage} alt={gift.name} />
                ))}
            </div>
        </div>
    )
}

export default Main;