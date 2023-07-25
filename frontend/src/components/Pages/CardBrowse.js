import React, { useState } from 'react';
import styles from './css/cardBrowse.module.css';

const CardBrowse = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { header: 'Card 1', content: 'Content of Card 1' },
    { header: 'Card 2', content: 'Content of Card 2' },
    { header: 'Card 3', content: 'Content of Card 3' },
    { header: 'Card 4', content: 'Content of Card 4' },
    { header: 'Card 5', content: 'Content of Card 5' },
  ];

  const handleCardChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className={styles.carousel}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles['card-container']} ${index === activeIndex ? styles.activeCardContainer : ''}`}
            style={{
              '--offset': index - activeIndex,
              '--abs-offset': Math.abs(index - activeIndex),
              '--direction': index < activeIndex ? -1 : 1,
              '--active': index === activeIndex ? 1 : 0,
            }}
          >
            {index === activeIndex ? (
              <div className={styles.activeCard}>
                <h2>{card.header}</h2>
                <p>{card.content}</p>
              </div>
            ) : (
              <div className={styles.card}>
                <h2>{card.header}</h2>
                <p>{card.content}</p>
              </div>
            )}
          </div>
        ))}
        <button
          className={`${styles.nav} ${styles.left}`}
          onClick={() => handleCardChange((activeIndex - 1 + cards.length) % cards.length)}
        >
          &#10094;
        </button>
        <button
          className={`${styles.nav} ${styles.right}`}
          onClick={() => handleCardChange((activeIndex + 1) % cards.length)}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default CardBrowse;
