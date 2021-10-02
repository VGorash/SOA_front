import {DEFAULT_URL} from '../index'
import {applyMiddleware} from "redux";
import convert from 'xml-js'

const mainMiddleware = store => next => action => {
    switch (action.type) {
        case("LOAD_TICKETS"):{
            let req = new XMLHttpRequest();
            //pagination
            let pagination = `pageNumber=${store.getState().currentPage}&pageSize=${store.getState().pageSize}`;
            //sorting
            let order = "";
            order = applySort(store.getState().filters.id, "id", order);
            order = applySort(store.getState().filters.name, "name", order);
            order = applySort(store.getState().filters.coordinates, "coordinates", order);
            order = applySort(store.getState().filters.date, "creationDate", order);
            order = applySort(store.getState().filters.price, "price", order);
            order = applySort(store.getState().filters.comment, "comment", order);
            order = applySort(store.getState().filters.type, "type", order);
            order = applySort(store.getState().filters.event, "event", order);
            //filtering
            order = applyFilter(store.getState().filters.id, "id", order);
            order = applyFilter(store.getState().filters.name, "name", order);
            order = applyFilter(store.getState().filters.x, "coordinates", order, store.getState().filters.y);
            order = applyFilter(store.getState().filters.date, "creationDate", order);
            order = applyFilter(store.getState().filters.price, "price", order);
            order = applyFilter(store.getState().filters.comment, "comment", order);
            order = applyFilter(store.getState().filters.type, "type", order);
            order = applyFilter(store.getState().filters.event, "event", order);
            req.open("GET", `${DEFAULT_URL}/tickets?${pagination}${order}`, false);
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

function applySort(filter, name, result){
    if(filter.sort !== 0){
        return  result + `&orderBy=${name},${filter.sort === 1? "asc":"desc"}`;
    }
    else return result;
}

function applyFilter(filter, name, result, secondFilter=null){
    if(filter.filter){
        if(secondFilter){
            return result + `&${name}=${filter.filter},${secondFilter.filter}`;
        }
        else return  result + `&${name}=${filter.filter}`;
    }
    else return result;
}
export default applyMiddleware(mainMiddleware)