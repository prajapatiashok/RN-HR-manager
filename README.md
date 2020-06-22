# HR-MANAGER APP
# A React Native App to handle the simple(CRUD) operation to hire, Read, Edit and Fire Employee.

 - Redux to manage state.
 - Splitted reducers to handle different states specifically - Used combineRedcers to combine the different reducers so as to act similar to that of a single reducer to make it more readable.
 - Used connect() to connect the React component to a Redux store and then dispatch actions to create the todo.
 - Used action creators and action types for proper code management and better readability.
 - Firebase CRUD Operations.

## Features

  - Add Employee and display the employee list with the help of firebase and redux.
  - Update and Read the employee data with the help of firebase and redux.
  - Able to text to the employee phone number with the help of react-native-communications library.
  - Fire Employee and deleted from the list using redux and firebase.
 
 
## Installation

  The app is fully developed with the react-native-cli. 
  
  In order to install the app in your emulator or in simulator, clone the project and run <b>npm install</b>.
   - After installing the packages, dont forget to add  firebase configuration in the project.
   - Goto [Firebase](https://firebase.google.com/) Console, log in from your Google Account and a create a new project.
   - Add the configuration in /scr/app.js. 
   Firebase initialization configuration
       
            var firebaseConfig = {                                                                                                      
                apiKey: '*********************0',                                                                                       
                authDomain: '***********',
                databaseURL: '**************',
                projectId: '**********',
                storageBucket: '*********',
                messagingSenderId: '********'
              };
              // Initialize Firebase
              if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
        }
   - After adding configuration, run <b>react-native run-android</b>.
       
        
     
  
  ### App Screens (Android Screenshots - Emulator)
<div>
    <img src="./img/1 (1).png" alt="Login Screen" width="250" height="400">
    <img src="./img/1 (2).png" alt="List of Employees Screen" width="250" height="400">
    <img src="./img/1 (3).png" alt="Create Screen" width="250" height="400">
    <img src="./img/1 (4).png" alt="Picker day screen" width="250" height="400">
    <img src="./img/1 (5).png" alt="create screen" width="250" height="400">
    <img src="./img/1 (6).png" alt="Employees Screen" width="250" height="400">
    <img src="./img/1 (7).png" alt="Employees Screen" width="250" height="400">
    <img src="./img/1 (8).png" alt="Edit and read screen" width="250" height="400">
    <img src="./img/1 (9).png" alt="Delete screen" width="250" height="400">
    <img src="./img/1 (10).png" alt="employees screen" width="250" height="400">
  
</div>
