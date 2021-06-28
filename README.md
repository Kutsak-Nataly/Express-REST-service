# Authentication and JWT
***
## Used
* Clone repository from GitHub to your computer. Install the dependencies specified in the file package.json.
* Select branch Task8
### Configuration connection to your local database
.env file
TYPEORM_USERNAME=
TYPEORM_PASSWORD=
TYPEORM_DATABASE=
### Start App with synchronize database
npm start
### Add user "admin"
POST:http://localhost:4000/login/add-user
{
"name": "123",
"login": "admin6756",
"password":"admin"
}
### Run test
npm run test:auth


