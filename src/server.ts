import {createConnection} from 'typeorm';
import {TYPEORM_HOST, PORT} from './common/config';
import {app} from './app';

createConnection()
    .then(() => {
        app.listen(PORT, () =>
            process.stdout.write(`App is running on http://${TYPEORM_HOST}:${PORT}`)
        );
    })
    .catch((e) => {
        process.stderr.write('Failed to connect DB', e.message);
    });

