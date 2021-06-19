import {HOST, PORT} from './common/config';
import {app} from './app';
import {tryDbConnect} from './db';

tryDbConnect(() => {
    app.listen(PORT, () =>
        // eslint-disable-next-line no-console
        console.log(`App is running on http://${HOST}:${PORT}`)
    );
}).then(r => r);

