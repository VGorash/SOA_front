import {DEFAULT_URL} from '../index'
import {applyMiddleware} from "redux";
import convert from 'xml-js'

const mainMiddleware = store => next => action => {
    switch (action.type) {
        case("LOAD_TICKETS"):{
            let req = new XMLHttpRequest();
            let pagination = `pageNumber=${store.getState().currentPage}&perPage=${store.getState().pageSize}`;
            req.open("GET", `${DEFAULT_URL}/tickets?${pagination}`, false);
            req.onload = ()=>{
                if(req.status === 200){
                    store.dispatch({type: "UPDATE_TICKETS", value: convert.xml2js(req.responseText, {compact: true})})
                    store.dispatch({type: "SET_ERROR", value: {error: null}})
                }
                else{
                    store.dispatch({type: "SET_ERROR", value: {error: req.responseText}})
                }
            };
            req.onerror = ()=>alert("Server is unavailable");
            req.send();
            return next(action)
        }
        default:{
            return next(action)
        }

    }
}
export default applyMiddleware(mainMiddleware)