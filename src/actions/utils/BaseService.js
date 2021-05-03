import {
    idbCon
} from "./IdbService";

export class BaseService {

    get connection() {
        return idbCon;
    }

}