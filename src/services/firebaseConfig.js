import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAJS66Mr5-nVyL-bjkNwZII6kxoK9_7xfw",
    authDomain: "veganshopauth.firebaseapp.com",
    projectId: "veganshopauth",
    storageBucket: "veganshopauth.appspot.com",
    messagingSenderId: "1501482054",
    appId: "1:1501482054:web:434ba61a973623466c8e47",
    measurementId: "G-XP9YEN8FPL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)