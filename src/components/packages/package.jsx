import React, { useEffect, useState } from 'react';
import styles from './package.module.scss';
import Item from '../item/Item';
import fetchCollection from '../../lib/fetchCollection';
import Pagination from '../pagination/Pagination';

export default function Package() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoadingStatus] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [packagesPerPage] = useState(10);
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
        const collectionName = 'packages';
        const collectionData = await fetchCollection(collectionName);
        setData(collectionData);
      } catch (error) {
        console.error('Error fetching data:', error);
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
      {data.length === 0 ? (
        <p>No record found</p>
      ) : (
        <div>
          <div className={`${styles.item}`}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {currentPackages.map((packageDetails) => {
                const { id, name, price, description, imageURL } =
                  packageDetails;
                return (
                  <Item
                    key={id}
                    name={name}
                    description={description}
                    price={price}
                    imageURL={imageURL}
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
