const functions = require("firebase-functions");
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();


//call functions with HTTPS request
exports.date = functions.https.onRequest((req, res) => {
   const data=req.body
   if(!data){
     res.status(400).json({ message: "You send nothing"})
   }else{
     res.status(200).json({
       data
     })
   }
});

//call functions from your app
exports.addMessage = functions.https.onCall((data, context) => {
    // Message text passed from the client.
    const text = data.text;
    // Authentication / user information is automatically added to the request.
      const uid = context.auth.uid;
      //return responce
      res.send(text);

});

//shedule functions
exports.scheduledFunction = functions.pubsub.schedule('every 10 minutes').onRun((context) => {
  console.log('hello from server');
  return null;
});

//cloud firestore functions

//when document created
exports.createUser = functions.firestore
    .document('document id')
    .onCreate((snap, context) => {

      const newValue = snap.data();
      
      res.send(data);
    });

//update data
    exports.updateUser = functions.firestore
    .document('users/{userId}')
    .onUpdate((change, context) => {

      const newValue = change.after.data();

      const previousValue = change.before.data();

      res.send();

      // perform desired operations ...
    });
//write document
    exports.modifyUser = functions.firestore
    .document('users/{userID}')
    .onWrite((change, context) => {

      const document = change.after.exists ? change.after.data() : null;
      const oldDocument = change.before.data();

      // perform operations ...
      res.send();
    });