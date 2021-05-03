import * as JsStore from 'jsstore';
import { IDataBase, DATA_TYPE, ITable } from 'jsstore';
import {workerPath} from 'configuration/config'



// This will ensure that we are using only one instance. 
// Otherwise due to multiple instance multiple worker will be created.
export const idbCon = new JsStore.Connection(new Worker(workerPath));
export const dbname = 'Demo';

const getDatabase = () => {
    const tblStudent = {
        name: 'results',
        columns: {
            id: {
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            time: {
                notNull: true,
                dataType: DATA_TYPE.DateTime,
            },
            movements: {
                notNull: true,
                dataType: DATA_TYPE.Number,
            },
        }
    };
    const dataBase = {
        name: dbname,
        tables: [tblStudent]
    };
    return dataBase;
};

export const initJsStore = () => {
    try {
        const dataBase = getDatabase();
        idbCon.initDb(dataBase);
    }
    catch (ex) {
        console.error(ex);
    }
}