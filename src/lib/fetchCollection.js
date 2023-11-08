import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/config';

export default async function fetchCollection(collectionName) {
  try {
    const docRef = collection(db, collectionName);
    const q = query(docRef, orderBy('createdAt', 'desc'));

    return new Promise((resolve, reject) => {
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          // Extract the data
          const allData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          // Clean up the listener
          unsubscribe();

          resolve(allData);
        },
        (error) => {
          // Handle errors
          console.error('Error fetching collection:', error);
          reject(error);
        }
      );
    });
  } catch (error) {
    console.error('Error creating query:', error);
    throw error;
  }
}
