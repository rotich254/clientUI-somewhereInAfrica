import React, { useState } from 'react';
import styles from './item.module.scss';
import OpenModal from './modal/OpenModal';
import Reserve from '../reserve/Reserve';

export default function Item({
  name,
  imageURL,
  description,
  price,
  includes,
  excludes,
  tourDetails,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [openReservationsForm, setOpenReservationsForm] = useState(false);

  return (
    <>
      {openModal && (
        <OpenModal
          name={name}
          tourDetails={tourDetails}
          includes={includes}
          excludes={excludes}
          updateModalState={() => setOpenModal(false)}
          updateReservationFormVisibility={() => setOpenReservationsForm(true)}
        />
      )}
      {openReservationsForm && (
        <Reserve
          packageName={name}
          updateModalState={() => setOpenReservationsForm(false)}
        />
      )}

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
              <div onClick={() => setOpenModal(true)}>Read more</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
