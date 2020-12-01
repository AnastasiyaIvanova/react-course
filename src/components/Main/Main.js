import React from 'react';
import styles from './main.module.css'; 

const blocks = ["С вашим текстом", "Для него", "Для неё"];

const Main = () => {
    const [activeBlock, setActiveBlock] = React.useState("С вашим текстом");
    return (
        <div className={styles.main}>
            <ul>
                {blocks.map((block) => (
                    <li onClick={() => setActiveBlock(block)} className={activeBlock === block ? styles.choose : styles.li}>{block}</li>
                ))}
            </ul>
            <div className={styles.images_block}>
                {gifts.map((gift) => (
                    <div>
                        <div style={{overflow:"hidden"}}><img src={gift.giftImage} alt={gift.name} /></div>
                        <p>{gift.name}</p>
                        <h3>{gift.price}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Main;

const gifts = [
    {
        name: "Кружка с вашим фото «Лучшей подруге»",
        giftImage: require('../../img/cup.jpg').default,
        price: "650 руб"
    },
    {
        name: "Кружка с вашим именем «С 8 марта»",
        giftImage: require('../../img/cup1.jpg').default,
        price: "650 руб"
    },
    {
        name: "Кружка с вашим именем «Хоть и не военный»",
        giftImage: require('../../img/cup2.jpg').default,
        price: "650 руб"
    }
];