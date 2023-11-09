import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './reserve.module.scss';
import { RxCross2 } from 'react-icons/rx';

const initialState = {
  client_name: '',
  email: '',
  phone_number: '',
  number_of_people: '',
  number_of_days: '',
  date: new Date().toISOString().substring(0, 10),
};

export default function Reserve({ updateModalState, name }) {
  const form = useRef();
  const [formData, setFormData] = useState(initialState);
  const {
    client_name,
    email,
    phone_number,
    number_of_days,
    number_of_people,
    date,
  } = formData;

  function processFormInputData(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function submitFormData(e) {
    e.preventDefault();

    try {
    } catch (error) {}
  }

  const DomElement = document.getElementById('bookingForm');
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
          <h1>Kindly fill this form</h1>
          <div>
            <form ref={form} onSubmit={submitFormData}>
              <label>Package</label>
              <input
                type='text'
                readOnly
                className={styles.package}
                value={name}
              />

              <label>Full name</label>
              <input
                type='text'
                required
                placeholder='Enter full name'
                name='client_name'
                value={client_name}
                onChange={(e) => processFormInputData(e)}
              />

              <label>Email</label>
              <input
                type='email'
                required
                placeholder='Enter your email'
                name='email'
                value={email}
                onChange={(e) => processFormInputData(e)}
              />

              <label>Phone</label>
              <input
                type='tel'
                required
                placeholder='Enter your phone number'
                name='phone_number'
                value={phone_number}
                onChange={(e) => processFormInputData(e)}
              />

              <label>Number of people</label>
              <input
                type='number'
                required
                placeholder='How many people?'
                name='number_of_people'
                value={number_of_people}
                onChange={(e) => processFormInputData(e)}
              />

              <label>Number of days</label>
              <input
                type='number'
                required
                placeholder='Enter number of days'
                name='number_of_days'
                value={number_of_days}
                onChange={(e) => processFormInputData(e)}
              />

              <label>Date</label>
              <input
                type='date'
                required
                value={date}
                name='date'
                onChange={(e) => processFormInputData(e)}
              />

              <button type='submit' className={styles.submit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>,
    DomElement
  );
}
