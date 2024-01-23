# Notations App
A tech challenge for a job application 
The tests for the application were made on each input before the submit to the database for guarantee the succes and correct shipping of the data, using non real input data for the seccurity
On this repository the database will be empty for the localusage 
### How to use:
Open the terminal and Clone the repository 
```sh
git clone https://github.com/alucasb/notations.git Notatios
```
Go to the diretory 
```sh
cd Notatios 
```
Install dependences 
```sh
npm i
```
Configure the package json and add a new script to make the application work
```sh
"backend": "json-server --watch src/db/indexDB.json"
```
Run the command to start the web server
```sh
npm run backend
```
Then finnaly run the command and use the app
```sh
npm run dev
```
