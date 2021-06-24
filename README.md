# PostgreSQL & Typeorm
***
## Used
* Clone repository from GitHub to your computer. Install the dependencies specified in the file package.json.
* Select branch Task7
### Configuration connection to your local database
.env file
TYPEORM_SYNCHRONIZE=<del>false</del>true
### Start App with synchronize database
npm start
### Run test
npm run test
### Check migration
fix .env file
TYPEORM_SYNCHRONIZE=<del>true</del>false
```$xslt
npm run db:generate
```

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

