import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


import Result from 'actions/Result'


const result = new Result();

const actions = [
    {
        className: Result,
        object: result
    }

]


const stateToProps = (state, props) => {
    return {

    }
}


const dispToProps = (disp) => {
    let res = {};
    for (let action of actions) {
        let methods = Object.getOwnPropertyNames(action.className.prototype);
        for (let method of methods)
            if (method !== "constructor")
                res[method] = (...args) => disp(action.object[method](...args));
    }
    return res;
};


const mergeProps = (states, disps, props) =>
    Object.assign({}, states, disps, props);

const redux = (component) =>
    withRouter(connect(
        stateToProps,
        dispToProps,
        mergeProps
    )(component)
    );

export const reduxProperties = (component) =>
    withRouter(connect(

    )(component)
    );

export default redux;