// all the dom content must be loaded before trying to access the data store
// be aware of this when loading dynamic content such as job postings
// document.addEventListener('DOMContentLoaded', function() {
//   // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
//   // // The Firebase SDK is initialized and available here!
//   //
//   // firebase.auth().onAuthStateChanged(user => { });
//   // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
//   // firebase.messaging().requestPermission().then(() => { });
//   // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
//   //
//   // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

//   try {
//     let app = firebase.app();
//     let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
//     document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
//   } catch (e) {
//     console.error(e);
//     document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
//   }
// });

const signup = document.querySelector('#signup')
signup.addEventListener('submit', (e) => { 
    e.preventDefault();

    // grab firestore.auth
    const auth = firebase.auth();

    // get user info
    const email = signup['email'].value;
    const pw = signup['pw'].value;
    
    // passes user credentials into the callback func inside then
    auth.createUserWithEmailAndPassword(email, pw)
    .then(cred => {
        console.log(cred);
    })


})
