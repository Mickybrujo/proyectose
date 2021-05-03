import * as Const from "reducers/utils/Const.js";
import {
    BaseService
} from "actions/utils/BaseService";

class Action extends BaseService {

    constructor(tableName) {
        super();
        this.tableName = tableName
        var db = this.conectToDb();
        db.transaction(function (tx) {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS ${tableName} (id unique, name, time, movements)`
            );
        });

    }

    delete(id) {
        return (disp) => {
            return this.connection.remove({
                from: this.tableName,
                where: {
                    id: id
                }
            })
        }
    }

    async getHelper(parameters) {
        let result = await this.connection.select({
            from: this.tableName,
        })
        return result
    }

    get(parameters = {}, callback) {
        var db = this.conectToDb();
        let query = `select * from ${this.tableName};`
        function errorHandler(transaction, error) {
            console.log(error)
        }
        db.transaction(function (tran) {
            tran.executeSql(query, [], function (transaction, result) {
                console.log(result)
                let results = []
                for (var i = 0; i < result.rows.length; i++) {
                    results.push(result.rows.item(i));
                }
                callback(results)
            },
                errorHandler
            );
        })
        return () => { }
    }

    save(parameters, callback) {
        var db = this.conectToDb();
        function errorHandler(transaction, error) {
            console.log(error)
        }
        var query = "INSERT INTO " + this.tableName + " (";
        var itemToInsert = [];
        var helper = "(";
        for (var key in parameters) {
            itemToInsert.push(parameters[key]);
            query += key + ",";
            helper += "?,";
        }
        helper = helper.substr(0, helper.length - 1);
        query = query.substr(0, query.length - 1);
        helper += ")";
        query += ") VALUES " + helper;
        db.transaction(function (tran) {
            tran.executeSql(query, itemToInsert, () => {
                console.log("gola")
                if (callback) {
                    callback(true)
                }
            }, errorHandler);
        });
        return () => { }

    }

    conectToDb() {
        var db;
        db = openDatabase(
            "estruturasLO",
            "1.0",
            "Tiene las estructuras de la práctica.",
            1024 * 1024 * 1024
        );
        return db;
    }



    /**
     === SYNC ACTIONS ===
     */

    restartData = () => ({
        type: `${this.id}_${Const.RESTART}`
    });

    /**
     === EVENTS (TO REDUCERS) ===
     */

    onPaginate = (dataset) => {
        if (dataset.data)
            return {
                type: `${this.id}_${Const.GET_LIST}`,
                dataset: dataset.data
            }
        else {
            return {
                type: `${this.id}_${Const.GET_LIST}`,
                dataset: dataset
            }
        }
    };

    onGetList = (dataset) => ({
        type: `${this.id}_${Const.GET_LIST}`,
        dataset: dataset
    });

    onGetDetails = (data) => ({
        type: `${this.id}_${Const.GET_DETAILS}`,
        data: data
    });

    onPostData = (data) => ({
        type: `${this.id}_${Const.POST}`,
        data: data
    });

    onPutData = (data) => ({
        type: `${this.id}_${Const.PUT}`,
        data: data
    });

    onDeleteData = (data) => ({
        type: `${this.id}_${Const.DELETE}`,
        id: data.id
    });

}

export default Action