function startFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyDZc7R_-lLK9xKfa4_610JI7Izk4b831Xc",
        authDomain: "crudherbert.firebaseapp.com",
        databaseURL: "https://crudherbert-default-rtdb.firebaseio.com",
        projectId: "crudherbert",
        storageBucket: "crudherbert.appspot.com",
        messagingSenderId: "382234945560",
        appId: "1:382234945560:web:e0e3b7df6c372bc513fb6d",
        measurementId: "G-RBB092Q5HF"
      };

    const app = initializeApp(firebaseConfig);

}