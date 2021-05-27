# EXPRESS REST API
### The development pattern is used - division into layers:
1. Processing requests and responses from the browser
2. Services in which the business logic of the application is processed
3. Accessing the database directly 

***
## Used
Clone repository from GitHub to your computer. Install the dependencies specified in the file package.json.
## JsDoc
To create documentation for the application, the module was used [JsDoc](https://www.npmjs.com/package/jsdoc).
Additionally used module [docDash](https://github.com/clenemt/docdash)

## CLI generate JSDoc
```$xslt
node_modules/.bin/jsdoc src -c conf.json
```
## Generate JSDoc by script
```$xslt
npm run doc
```


