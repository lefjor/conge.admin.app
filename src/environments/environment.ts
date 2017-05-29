// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC6FRj0IFG1YNfFq0w0TWcUlG9xvYjVr3k",
    authDomain: "conges-firebase.firebaseapp.com",
    databaseURL: "https://conges-firebase.firebaseio.com",
    projectId: "conges-firebase",
    storageBucket: "conges-firebase.appspot.com",
    messagingSenderId: "908008060105"
  }
};
