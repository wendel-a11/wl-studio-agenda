<!-- firebase.js -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
const firebaseConfig = {
    apiKey: "AIzaSyCFqzrPKFDzBD6-W1WU646IVRB8d6pb4JQ",
    authDomain: "wl-studio-agenda.firebaseapp.com",
    projectId: "wl-studio-agenda",
    storageBucket: "wl-studio-agenda.firebasestorage.app",
    messagingSenderId: "794918704806",
    appId: "1:794918704806:web:9851af91514bdb70b04667"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  window.db = db;
</script>
