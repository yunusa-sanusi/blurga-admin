import { doc, getDoc, setDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth, db } from './firebase';

export const createUserDocument = async (userAuthData) => {
  if (!userAuthData) {
    return;
  }

  const userDocRef = doc(db, 'users', userAuthData.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuthData;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        bio: '',
        photoURL,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const getUserDocument = async (uid) => {
  if (!uid) return;

  const userDocRef = doc(db, 'users', uid);
  const userSnapshot = await getDoc(userDocRef);
  return userSnapshot.data();
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
