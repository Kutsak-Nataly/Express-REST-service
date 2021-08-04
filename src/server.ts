import { createConnection } from 'typeorm';
import { PORT, TYPEORM_HOST } from './common/config';
import { app } from './app';

createConnection()
    .then(
        () => {
            app.listen(PORT, () =>
                console.log(`App is running on http://${TYPEORM_HOST}:${PORT}`)
            );
        },
        (e) => console.log('Failed to connect DB', e.message)
    );



