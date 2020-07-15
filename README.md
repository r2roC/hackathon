# **Running on local server**
This will allow you to hook up to the db as well as mess around with the front end
1. Open up a terminal and run
	```npm install firebase-tools -g``` or
	```curl -sL https://firebase.tools | bash``` 
  for Macs you may have to put sudo in the front of the command if you get errors. 
  This will install the firebase dev tools globally on your machine
2. Then run ```firebase login```and login with 

*username: teamRocketCAANS@gmail.com*

*password: ILoveMeowth1!*

3. To see projects run ```firebase projects:list```You should see pikaProject
4. If you haven’t already clone the repo, and cd into it
5. To test and run the app on a local host,  run ```firebase serve ```
open up the localhost in your browser. Update the code, save it, and refresh the browser to see the change. 
(TODO: look into hot reload), to bring the local server down, enter control-c in your terminal

**Firebase Console**
The firebase console allows you to access and easily change the database, as well as see and manage all registered users on the app. Look up firebase console and login with the same google credentials as above. 
