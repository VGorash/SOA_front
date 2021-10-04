import { createStore} from 'redux';
import reducers from './reducers';
import middleware from "./middleware";

const initialState = {
    tickets: [],
    totalTickets: 0,
    currentPage: 1,
    pageSize: 5,
    error: null,
    mode: 0,
    currentTicket:
        {
            id: "",
            name: "",
            coords_x: "",
            coords_y: "",
            date: "",
            price: "",
            comment: "",
            type: "",
            event_id: "",
            event_name: "",
            event_date: "",
            event_type: ""
        },
    filters:
        {
            id: {filter: null, sort: 0},
            name: {filter: null, sort: 0},
            coordinates: {filter: null, sort: 0},
            x: {filter: null, sort: 0},
            y: {filter: null, sort: 0},
            date: {filter: null, sort: 0},
            price: {filter: null, sort: 0},
            comment: {filter: null, sort: 0},
            type: {filter: null, sort: 0},
            event: {filter: null, sort: 0}
        }
}

export default createStore(reducers, initialState, middleware);