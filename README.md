# **PartyPlanner**
## Mission statement
When we went on trips with friends, we had problems getting organized. We wanted an easy to use app that could help us stay on track with the items we need and the money we spend on vacation.
<br>
<br>
We didn't find anything useful that was free. All the apps that seemed good were paid, which we didn't like... So we set out to create our own solution that would fit our needs and maybe even your's.
# Setup:
## General requirements: 
* .NET Core 
* Docker 
* docker-compose 
* Node.js 
## REST project: 
1. Create and start docker container for MongoDB 
2. Run ```dotnet start``` in the root of the project 
## Web project: 
1. Run ```mpm i g @angular/cli``` 
2. Run ```npm i``` inside the PartyPlanner.Web folder 
3. Run ```ng serve --proxy-config proxy.conf.json``` 
## docker-compose cluster: 
1. Create ```.env``` file in the root of the project
2. Input the following variables:
	* ```ROOT_USERNAME``` - username of the root database account
	* ```ROOT_PASSWORD``` - password of the root database account
	* ```APP_USERNAME``` - username of the API user
	* ```APP_PASSWORD``` - password of the API user
	* ```DATABASE``` - name of the database for storing parties
	* ```CONN_STRING``` - connection string of the database with all the authentication info
	<br>
	**EXAMPLE**: mongodb://```APP_USERNAME```:```APP_PASSWORD```@PartyPlanner.DB:27017/```DATABASE```?authSource=```DATABASE```
	<br>
	Replace the environment variable names with their acutal values.
3. Run ```docker-compose build``` to build the containers
4. Run ```docker-compose up``` to start the cluster