import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDS9jO9foWGBqOUv5nse5zzAbjXbLt9flQ',
  authDomain: 'blurga-2af57.firebaseapp.com',
  projectId: 'blurga-2af57',
  storageBucket: 'blurga-2af57.appspot.com',
  messagingSenderId: '88418208991',
  appId: '1:88418208991:web:a108635f348a36b2186d6a',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
