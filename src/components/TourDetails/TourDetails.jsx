import React from 'react';
import styles from './tourDetails.module.scss';
import { createPortal } from 'react-dom';

export default function TourDetals() {
  const DOMElement = document.getElementById('tourDetails');
  if (!DOMElement) {
    return null;
  }

  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.tour}>
        <div className={styles['tour-details']}>
          <p>Icon</p>
          <h2>Tour Details</h2>
          <p>
            Over three action-packed days in Maasai Mara, the package offers
            thrilling safaris, cultural exploration, and stunning sunsets on Day
            1. Day 2 includes exciting
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className={styles.include}>
            <p>icon</p>
            <h2>Include</h2>
            <ul>
              <li>ark fees</li>
              <li>ark fees</li>
              <li>ark fees</li>
            </ul>
          </div>
          <div className={styles.exclude}>
            <p>icon</p>
            <h2>Exclude</h2>
            <ul>
              <li>ark fees</li>
              <li>ark fees</li>
              <li>ark fees</li>
            </ul>
          </div>
        </div>
        <div className={styles.booking}>
          <h1>The Booking Form</h1>
          <p>
            Kindly fill the following form. Remember to provide accurate
            information
          </p>
          <div>Book Now</div>
        </div>
      </div>
    </div>,
    DOMElement
  );
}
