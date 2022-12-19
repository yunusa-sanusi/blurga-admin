import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

import { db } from './firebase';

export const createCategoryDocument = async (categoryData) => {
  if (!categoryData) return;

  const categoryDocRef = doc(db, 'categories', categoryData.id);

  try {
    await setDoc(categoryDocRef, categoryData);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPostDocument = async (postData) => {
  if (!postData) return;

  const postDocRef = doc(db, 'posts', postData.id);

  try {
    await setDoc(postDocRef, postData);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPostDocument = async (postId) => {
  if (!postId) return;

  const postDocRef = doc(db, 'posts', postId);
  const postSnapshot = await getDoc(postDocRef);

  return postSnapshot.data();
};

export const getAllPosts = async () => {
  const postCollection = collection(db, 'posts');
  const postDocuments = await getDocs(postCollection);

  return postDocuments.docs;
};

export const getAllCategories = async () => {
  const categoryCollection = collection(db, 'categories');
  const categoryDocuments = await getDocs(categoryCollection);

  return categoryDocuments.docs;
};
