
# Firebase Functions

In this we are going to  set the envirourment for 
firebase functions and use some basic firebase functions
and how we deploy the functions to the cloud firestore.

## Prerequisite

1. If you haven't already, create a Firebase project:
In the Firebase console, click Add project, and
then create project.

2. Install node.js in your system.

3. Install Visual Studio Code

Note: For using firebase functions feature you have to upgrade
your spark plan to blaze plan.
## Installation

Install Firebase CLI
```bash
npm install -g firebase-tools
```

Initialize your project
```bash
firebase login

firebase init firestore.

firebase init functions
```
    
## Initialize your project

1. Run firebase login to log in via the browser and 
authenticate the firebase tool.

2. Go to your Firebase project directory.

3. Run firebase init firestore.

4. Run firebase init functions.

5. The tool gives you two options for language support:

JavaScript

TypeScript. 
## Deploy functions to a production environment
Once your functions are working as desired in the 
emulator, you can proceed to deploying, testing, and 
running them in the production environment. Keep in 
mind that to deploy to the recommended Node.js 14 
runtime environment, your project must be on the 
Blaze pricing plan. See Cloud Functions pricing.

Run this command to deploy your functions:
```bash
firebase deploy --only functions
```
## Contributing
## Acknowledgements

 - [Node.js](https://nodejs.org/en/)
 - [Firebase](https://firebase.google.com/)
 - [Visual Studio Code](https://code.visualstudio.com/)
 - [Cloud Functions](https://firebase.google.com/docs/functions)
## 🚀 About Me
Hello everyone, My name is Lucky and I am from Delhi, India.
You can Follow me on Linkedin and GitHub.
- [GitHub](https://github.com/LuckyGoyal039)
- [Linkedin](https://www.linkedin.com/in/lucky-goyal-57b1461b4/)
