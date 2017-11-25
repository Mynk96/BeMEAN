Steps to run this app (Windows):-

1) Install NodeJs and MongoDb.(Use Custom installation for mongoDb)
2) Add location of bin directory of both the apps (NodeJs and MongoDb) in system's path variables.
3) Create a new folder data and another folder db inside data folder.
4) Clone the repo.
6) Start your mongodb server from command line by running command 'mongod'
7) Open a new cmd terminal. Run commands :-
	a) mongo
	b) use studentDetails
	c) Ctrl + c (exit)
5) In your terminal change your directory to cloned repo directory(BeMEAN).
6) Run following commands:-
	a) npm install
	b) npm install express
	c) npm install mongojs
7) Start your nodejs server by running command 'node server'.
8) Go to url : 'http://localhost:3000'