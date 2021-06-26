import {createConnection} from 'typeorm';
import {TYPEORM_HOST, PORT} from './common/config';
import {app} from './app';

createConnection()
    .then(() => {
        app.listen(PORT, () =>
            console.log(`App is running on http://${TYPEORM_HOST}:${PORT}`)
        );
    })
    .catch((e) => {
        console.log('Failed to connect DB', e.message);
    });

