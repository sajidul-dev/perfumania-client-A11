// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBC5du7Thr3gRMrj8uKO0enf97d-A0lfpo",
    authDomain: "warehouse-management-949b6.firebaseapp.com",
    projectId: "warehouse-management-949b6",
    storageBucket: "warehouse-management-949b6.appspot.com",
    messagingSenderId: "932959941499",
    appId: "1:932959941499:web:1e60e49ab6a842c55043de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth