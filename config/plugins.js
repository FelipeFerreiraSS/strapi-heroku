module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "firebase-storage",
    providerOptions: {
      serviceAccount: require("../firebase-adminsdk-hetfg.json"),
      bucketUrl: env( "STORAGE_BUCKET_URL" ),
      options: {

        // var admin = require("firebase-admin"),

        // // Fetch the service account key JSON file contents
        // var serviceAccount = require("../firebase-adminsdk-hetfg.json"),

        // // Initialize the app with a service account, granting admin privileges
        // admin.initializeApp({
        //   credential: admin.credential.cert(serviceAccount),
        //   databaseURL: "https://letmeask-web-nlw-default-rtdb.firebaseio.com"
        // }),

        // var db = admin.database();
        // var ref = db.ref("restricted_access/secret_document");
        // ref.once("value", function(snapshot) {
        //   console.log(snapshot.val());
        // });
      },
      uploadOptions: {},
      deleteOptions: {},
    },
  },
  // ...
});



module.exports = ({ env }) => ({
  init(providerOptions) {
    // init your provider if necessary
    var admin = require("firebase-admin"),

    // Fetch the service account key JSON file contents
    var serviceAccount = require("../firebase-adminsdk-hetfg.json"),

    // Initialize the app with a service account, granting admin privileges
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://letmeask-web-nlw-default-rtdb.firebaseio.com"
    }),

    var db = admin.database();
    var ref = db.ref("restricted_access/secret_document");
    ref.once("value", function(snapshot) {
      console.log(snapshot.val());
      
    });


    return {
      upload(file) {
        // upload the file in the provider
        provider: "firebase-storage",
        providerOptions: {
          serviceAccount: require("../firebase-adminsdk-hetfg.json"),
          bucketUrl: env( "STORAGE_BUCKET_URL" ),
        },

      },
      delete(file) {
        // delete the file in the provider
      },
    };
  },
});
