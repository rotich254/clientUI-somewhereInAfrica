import { createPortal } from 'react-dom';
import styles from './openmodal.module.scss';
import { RxCross2 } from 'react-icons/rx';
import { BsCheck2Circle } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';

export default function OpenModal({
  name,
  tourDetails,
  includes,
  excludes,
  updateModalState,
  updateReservationFormVisibility,
}) {
  function openReservationForm() {
    updateReservationFormVisibility();
    updateModalState();
  }

  const DomElement = document.getElementById('tourDetails');
  if (!DomElement) {
    return null;
  }

  return createPortal(
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-content']}>
        <div className={styles.cancel}>
          <RxCross2
            size={25}
            onClick={() => updateModalState()}
            className={styles['cancel-icon']}
          />
        </div>
        <div className={styles.content}>
          <div className={styles['tour-details']}>
            <h2>{name}</h2>
            <h1>Tour details</h1>
            <p>{tourDetails}</p>
          </div>
          <div
            className={`${styles['package-list']} grid grid-cols-1 md:grid-cols-2 gap-4`}
          >
            <div>
              <h1>Package Includes</h1>
              <ul>
                {includes.map((item, index) => {
                  return (
                    <li key={index}>
                      <BsCheck2Circle />
                      <p>{item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h1>Excludes</h1>
              <ul>
                {excludes.map((item, index) => {
                  return (
                    <li key={index}>
                      <MdOutlineCancel />
                      <p>{item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={styles['book-now']} onClick={openReservationForm}>
            Book Now
          </div>
        </div>
      </div>
    </div>,
    DomElement
  );
}
