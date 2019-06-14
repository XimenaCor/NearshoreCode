# NearshoreCode
The project NearshoreCode pretends to solve the excercise given by the company. The project allows a user to ask for a loan, verifying first if the user is able or not to ask for a loan.
## Requirements
As ordered in the exercise, you will have to use Node.js and Angular 5+, also to control the database you will need MongoDB
### Install Node.js
To install in windows, download the Windows Installer .msi at https://nodejs.org/es/download/
To install in macOs or Linux download the macOS Installer .pkg at https://nodejs.org/es/download/
Once the installation has finished verify that you've had Node and npm installed:
### Install Angular
To install Angular on any Operating System you will use the Angular CLI and follow the instructions given at https://cli.angular.io/
### Install MongoDB
To install MongoDB on window, download this at https://www.mongodb.com/download-center/community?jmp=docs after inicialized the installation choose the Complete Mode. this will install also MongoDB Compass wich is a very usefull interface for Mongo
To install MongoDB on macOs, download this at https://www.mongodb.com/download-center/community?jmp=docs ando follow the instractions given at https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
## Clone the repository
To clone the repo run the command
git clone https://github.com/XimenaCor/NearshoreCode.git
## Node Modules and Installation
Once you have installed the main requirements and the repo itself, position your console on the download folder and run the commands
* cd api
* npm install
* npm start
After that position your console on the download folder again and run the commands
* cd client
* npm install
* ng serve
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.


#### Notes
* Back-end shoul run with Express, this will be installed after installing the node modules
* To have MongoDB running, run the mongod process at the system prompt. If necessary, specify the path of the mongod or the data directory.
* There is no need to create a DataBase, becouse this will be auto created after the first interaction with the system
