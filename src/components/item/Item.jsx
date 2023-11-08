import React from 'react';
import styles from './item.module.scss';

export default function Item({ name, imageURL, description, price }) {
  return (
    <>
      <div className={styles.item}>
        <div>
          <div>
            <div className={styles.image}>
              <p>${price}</p>
              <img src={imageURL} alt='package' />
            </div>
            <div className={styles.destination}>
              <h2>{name}</h2>
              <p>{description}</p>
              <div>Read more</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
