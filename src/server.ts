import {PORT, HOST} from './common/config';
import {app}  from './app';

app.listen(PORT,() =>
    // eslint-disable-next-line no-console
    console.log(`App is running on http://${HOST}:${PORT}`)
);
