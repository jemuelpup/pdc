// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ws_url: 'http://localhost:5000',
  firebase: {
    apiKey: "AIzaSyBwGs53JuZbGgIpoYfKtjl_RRE0ke1a4gU",
    authDomain: "designcolaboration-eceee.firebaseapp.com",
    databaseURL: "https://designcolaboration-eceee.firebaseio.com",
    projectId: "designcolaboration-eceee",
    storageBucket: "designcolaboration-eceee.appspot.com",
    messagingSenderId: "517228429879"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
