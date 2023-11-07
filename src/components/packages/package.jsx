import React from 'react';
import styles from './package.module.scss';
import Item from '../item/Item';

export default function Package() {
  return (
    <div className={styles.packages}>
      <div className={styles.heading}>
        <h1>Our packages</h1>
        <p>
          With our packages, you&apos;ll discover the true meaning of &apos;more
          for less&apos;
        </p>
        <input type='text' placeholder='Search destination' />
      </div>
      <div className={styles.item}>
        <Item />
      </div>
    </div>
  );
}
