import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBN5nrOJp-xiy0OqgGX671IhPbHACKURg",
  authDomain: "contact-manager-fa3ea.firebaseapp.com",
  projectId: "contact-manager-fa3ea",
  storageBucket: "contact-manager-fa3ea.appspot.com",
  messagingSenderId: "227344346474",
  appId: "1:227344346474:web:b4dd9ff3917fc2e9a40913",
  measurementId: "G-V367M7TD34",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
