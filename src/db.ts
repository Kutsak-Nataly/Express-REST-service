import {createConnection, getConnection} from 'typeorm';
import {config} from './ormconfig';

async function connectToDb() {
    let connection;
    try {
        connection = getConnection();
    } catch (err) {
        console.log(`Error Get Connection ORM\n${err}`);
    }

    try {
        if (connection) {
            if (!connection.isConnected) await connection.connect;
        } else {
            await createConnection(config);
        }
        console.log('Successfully Connection');
    } catch (err) {
        console.log(`Error Connection ORM\n${err}`);
    }
};

const tryDbConnect = async (cb: () => void) => {
    try {
        await connectToDb();
        cb();
    } catch (err) {
        console.log(`Error Connection ORM\n${err}`);
    }
};

export {tryDbConnect};
