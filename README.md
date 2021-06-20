# PostgreSQL & Typeorm
***
## Used
* Clone repository from GitHub to your computer. Install the dependencies specified in the file package.json.
* Select branch Task7
### Configuration connection to database
src/ormconfig.ts
### Start App
npm start

* Run command from the root disk of the project
```$xslt
docker-compose up
```
* Run command to build container from image app
```$xslt
docker run –d --rm –p 4000:4000 <id-app>
```
### Files
Dockerfile for PostgreSQ -> ./Dockerfile-db
Dockerfile for nodejs app -> ./Dockerfile-app

### Docker Hub

