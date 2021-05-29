import {PORT} from './common/config';
import {app}  from './app';

const hostname = 'localhost';

app.listen(PORT, hostname, () =>
    console.log(`App is running on http://${hostname}:${PORT}`)
);
