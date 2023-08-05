import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD7Vc8eum9h3ZqgihRl2AYwIAnM9785vvA',
  authDomain: 'codemely-dfbe2.firebaseapp.com',
  databaseURL:
    'https://codemely-dfbe2-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'codemely-dfbe2',
  storageBucket: 'codemely-dfbe2.appspot.com',
  messagingSenderId: '969896468329',
  appId: '1:969896468329:web:e8d5068dbd6e2d3064a7f8',
  measurementId: 'G-PT3MR0QKVM',
};
// databaseURL:
//   'https://codemely-d3437-default-rtdb.asia-southeast1.firebasedatabase.app',

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getDatabase(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    localStorage.setItem('user', JSON.stringify(user));
  } catch (e) {
    console.log(e);
  }
};

const logout = () => {
  signOut(auth);
};

// const getParticipant = (id: string) => {
//   console.log('...');
//   const docRef = ref(db, 'ranking/');
//   onValue(docRef, (snapshot) => {
//     const data = snapshot.val();
//     // updateDocRef(postElement, data)
//     console.log('....');
//     const i = Object.keys(data);
//     const arr = [];
//     for (let j of i) {
//       arr.push(data[j]);
//     }
//     console.log(arr);
//   });
// };

export { auth, signInWithGoogle, logout };
