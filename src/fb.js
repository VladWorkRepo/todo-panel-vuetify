// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-analytics.js";

import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZL6RGFV_82sU9Q8gTReX_luZ6OpLjOwY",
  authDomain: "todo-panel-vuetify.firebaseapp.com",
  projectId: "todo-panel-vuetify",
  storageBucket: "todo-panel-vuetify.appspot.com",
  messagingSenderId: "179486247242",
  appId: "1:179486247242:web:e66c02a4f2ee6b7751d9b3",
  measurementId: "G-H61Y4ZYWM7"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true});

export default db;