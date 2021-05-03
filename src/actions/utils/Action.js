import * as Const from "reducers/utils/Const.js";
import {
    BaseService
} from "actions/utils/BaseService";

class Action extends BaseService {

    constructor(tableName) {
        super();
        this.tableName = tableName

    }

    delete(id) {
        return this.connection.remove({
            from: this.tableName,
            where: {
                id: id
            }
        })
    }

    get(callback) {
        return this.connection.select({
            from: this.tableName,
        })
    }

    save(parameters) {
        return this.connection.insert(parameters)
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