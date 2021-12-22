const functions = require("firebase-functions");
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();


//call functions with HTTPS request
exports.httpsrequest = functions.https.onRequest((req, res) => {
   res.send("hello from the server");
});

// https call function
exports.httpscallfunction = functions.https.onCall((data, context) => {
  return "hello this is https callable functions";
});

//shedule functions
exports.scheduledFunction = functions.pubsub.schedule('every 10 minutes').onRun((context) => {
  console.log('hello from server');
  return null;
});

// firestore functions
exports.createUser = functions.firestore
    .document('/{collection}/{id}')
    .onCreate((snap, context) => {

      const data=snap.data();
      const collection=context.params.collection;
      const id=context.params.id;

      const activities=admin.firestore().collection('activities');

      if(collection==='users'){
        return activities.add({ text: "new user added"});
      }
      return null;
});

//authetication function trigger

exports.newUserSignup=functions.auth.user().onCreate(user=>{
  console.log('user created', user.email, user.uid);
});

exports.userDeleted=functions.auth.user().onDelete(user=>{
  console.log('user deleted', user.email, user.uid);
});
