module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "firebase-storage",
    providerOptions: {
      serviceAccount: require("../firebase-adminsdk-hetfg.json"),
      bucketUrl: env( "STORAGE_BUCKET_URL" ),
      uploadOptions: {},
      deleteOptions: {},
    },
  },
  // ...
});