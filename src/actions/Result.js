import Action from 'actions/utils/Action'

class Result extends Action {

    constructor() {
        super("results")
    }


    getResult(parameters, callback) {
        return this.get(parameters, callback)
    }

    saveResult(parameters) {
        return this.save(parameters)
    }
}

export default Result