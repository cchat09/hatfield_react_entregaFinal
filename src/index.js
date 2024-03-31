// // import React, { useEffect, useState } from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { initializeApp } from "firebase/app";
// // import { doc, getDoc, getFirestore } from "firebase/firestore";

// // const firebaseConfig = {
// //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// //   appId: process.env.REACT_APP_FIREBASE_APP_ID
// // };

// // // Log Firebase config for debugging
// // console.log({ firebaseConfig });

// // // Initialize Firebase app
// // const app = initializeApp(firebaseConfig);


// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // useEffect(() => {
// //   const db = getFirestore();

// //   const biciRef = doc(db, "items", "");
// //   getDoc(biciRef).then((snapshot) => {
// //     if (snapshot.exists()) {
// //       setProduct({ id: snapshot.id, ...snapshot.data() });
// //     }
// //   });
// // }, []);

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyBTaxYwFVAVfxxdL_LMz7hFL2CfcSLpd0E",
  authDomain: "ecommerce-hatfield.firebaseapp.com",
  projectId: "ecommerce-hatfield",
  storageBucket: "ecommerce-hatfield.appspot.com",
  messagingSenderId: "371937486650",
  appId: "1:371937486650:web:723f3955d89eed4104d203",
}

// Log Firebase config for debugging
console.log({ firebaseConfig });

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

const Root = () => {
  // Define setProduct using useState hook
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const biciRef = doc(db, "products", "ko5Eva7IZuFD4NHBehlv");
      const snapshot = await getDoc(biciRef);
      if (snapshot.exists()) {
        // Use setProduct to update the product state
        setProduct({ id: snapshot.id, ...snapshot.data() });
      }
    };

    fetchData();
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();