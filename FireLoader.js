import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBfmOdeCVHbTQ_oRefO4tJsjMEXuhIPQlA",
    authDomain: "example-project-9f763.firebaseapp.com",
    projectId: "example-project-9f763",
    storageBucket: "example-project-9f763.appspot.com",
    messagingSenderId: "572110298906",
    appId: "1:572110298906:web:4ccfe4497eed2822a956a3",
    measurementId: "G-QLQC683E5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let myApp = initializeApp(firebaseConfig);
const db = getFirestore();

const docRef = doc(db, "pm", "xFEXXIKt0C39vWftrpzt");
const actualDoc = await getDoc(docRef);

if(actualDoc.exists()){
    const document = actualDoc.data();
    console.log(document.name);
    console.log(document.major);
    console.log(document.year);
    setData([document.name, document.major, document.year]);
}


