<!-- firebase.js -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "COLE_AQUI",
    authDomain: "COLE_AQUI",
    projectId: "wl-estúdio-agenda",
    storageBucket: "COLE_AQUI",
    messagingSenderId: "COLE_AQUI",
    appId: "COLE_AQUI"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  window.db = db;
</script>
