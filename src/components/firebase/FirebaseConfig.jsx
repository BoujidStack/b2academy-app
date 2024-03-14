import { initializeApp } from "firebase/app";
{/*import { getAnalytics } from "firebase/analytics";*/}

const firebaseConfig = {
  apiKey: "AIzaSyB6s36zRYHnKziJgSPYPl2RM8kOkbfoQfc",
  authDomain: "b2academy-116f7.firebaseapp.com",
  projectId: "b2academy-116f7",
  storageBucket: "b2academy-116f7.appspot.com",
  messagingSenderId: "457289446332",
  appId: "1:457289446332:web:9b52da87dde374b7f971b9",
  measurementId: "G-6H8QYP8RQM"
};

const app = initializeApp(firebaseConfig);
{/*const analytics = getAnalytics(app);*/}

export default app;
