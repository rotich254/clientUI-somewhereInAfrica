import React from 'react';
import styles from './item.module.scss';

export default function Item() {
  return (
    <div className={styles.item}>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div>
          <div className={styles.image}>
            <p>$100</p>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/somewhere-in-africa.appspot.com/o/package-images%2F1698741995426Nairobi%20National%20Park.webp?alt=media&token=c1132aa7-a958-4c7a-9ee6-ab0aa7a4283f'
              alt='package'
            />
          </div>
          <div className={styles.destination}>
            <h2>Amboseli national park</h2>
            <p>
              Over three action-packed days in Maasai Mara, the package offers
              thrilling safaris, cultural exploration, and stunning sunsets on
              Day 1. Day 2 includes exciting game drives with up-close wildlife
              encounters
            </p>
            <div>Read more</div>
          </div>
        </div>
      </div>
    </div>
  );
}
