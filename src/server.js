const {PORT} = require('./common/config');
const app = require('./app');

const hostname = 'localhost';

app.listen(PORT, hostname, () =>
    console.log(`App is running on http://${hostname}:${PORT}`)
);
