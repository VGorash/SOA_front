import { createStore} from 'redux';
import reducers from './reducers';
import middleware from "./middleware";

const initialState = {
    tickets: [],
    totalTickets: 0,
    currentPage: 1,
    pageSize: 5,
    error: null
}

export default createStore(reducers, initialState, middleware);