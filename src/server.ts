import {HOST, PORT} from './common/config';
import {app} from './app';
import {TryDBConnect} from './db';

TryDBConnect(() => {
    app.listen(PORT, () =>
        // eslint-disable-next-line no-console
        console.log(`App is running on http://${HOST}:${PORT}`)
    );
});

