// Configuração do Firebase
const firebaseConfig = {
    apiKey:"AIzaSyBayWGkDN3CpFtBoup3EKkgDAyFI5tJ-KE",
    authDomain:"fabris2dsn.firebaseapp.com",
    projectId:"fabris2dsn",
    storageBucket:"fabris2dsn.appspot.com",
    messagingSenderId:"510562769061",
    appId:"1:510562769061:web:624bda5ef689e07aa6154c"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase inicializado"); // Debug após a inicialização
  } else {
    firebase.app(); // if already initialized, use that one
  }
  
  console.log("Firebase carregado");

