import React, { useEffect, useState } from 'react';
import styles from './package.module.scss';
import Item from '../item/Item';
import fetchCollection from '../../lib/fetchCollection';
import Pagination from '../pagination/Pagination';
import { Notify } from 'notiflix';

export default function Package() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [packagesPerPage] = useState(15);
  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currentPackages = data.slice(indexOfFirstPackage, indexOfLastPackage);

  function filterPackageBySearch(data, search) {
    const searchedPackage = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    return searchedPackage;
  }

  useEffect(() => {
    async function fetchPackages() {
      try {
        setError(false);
        const collectionName = 'packages';
        const collectionData = await fetchCollection(collectionName);
        setData(collectionData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
        Notify.failure('Error fetching data:', error);
      }
    }

    if (search !== '') {
      setData(filterPackageBySearch(data, search));
    } else fetchPackages();
  }, [data, search]);

  return (
    <div className={styles.packages}>
      <div className={styles.heading}>
        <h1>Our packages</h1>
        <p>
          With our packages, you&apos;ll discover the true meaning of &apos;more
          for less&apos;
        </p>
        <input
          type='text'
          placeholder='Search destination'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {error && (
        <div className='bg-red-500 flex items-center justify-center p-4 max-w-[300px] text-white text-center'>
          <p className='text-lg font-bold'>Error fetching data</p>
        </div>
      )}
      {data.length === 0 ? (
        <div className='bg-[#f5deb3] flex items-center justify-center p-4 mt-4 max-w-[300px] text-center'>
          <p className='text-lg font-bold'>No record found</p>
        </div>
      ) : (
        <div className='mt-4'>
          <div className={`${styles.item}`}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {currentPackages.map((packageDetails) => {
                const {
                  id,
                  name,
                  price,
                  description,
                  imageURL,
                  includes,
                  excludes,
                  tourDetails,
                } = packageDetails;
                return (
                  <Item
                    key={id}
                    name={name}
                    description={description}
                    price={price}
                    imageURL={imageURL}
                    includes={includes}
                    excludes={excludes}
                    tourDetails={tourDetails}
                  />
                );
              })}
            </div>
          </div>

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={packagesPerPage}
            totalItems={data.length}
          />
        </div>
      )}
    </div>
  );
}
