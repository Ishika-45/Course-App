import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue ,update} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDFoXGGKuMeM6jUq-69Pblf2JPCCo-6Gjo",
  authDomain: "course-app-8d526.firebaseapp.com",
  databaseURL: "https://course-app-8d526-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "course-app-8d526",
  storageBucket: "course-app-8d526.appspot.com",
  messagingSenderId: "337290923550",
  appId: "1:337290923550:web:f6b85dd8ba9486537b680f",
  measurementId: "G-KCDCBK8NKH"
};
const app = initializeApp(firebaseConfig);


const database = getDatabase(app);

export { database, ref, onValue,update };