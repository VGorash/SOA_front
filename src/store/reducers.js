import {fromTicket} from "../util/ticketUtil";

const mainReducer = (state={}, action)=>{
    switch (action.type){
        case ("UPDATE_TICKETS"): {
            let result = [];
            let ticket = action.value.ticketList.ticket;
            if(ticket && typeof ticket[Symbol.iterator] === 'function'){
                result = ticket;
            }
            else if(ticket){
                result.push(ticket);
            }
            return Object.assign({}, state, {tickets: result, totalTickets: parseInt(action.value.ticketList.totalTickets._text)});
        }
        case ("UPDATE_CURRENT_PAGE"): {
            return Object.assign({}, state, {currentPage: action.value.currentPage})
        }
        case ("UPDATE_PAGE_SIZE"): {
            return Object.assign({}, state, {pageSize: action.value.pageSize})
        }
        case ("UPDATE_SORT"): {
            let filters = state.filters;
            filters[action.value.filterName].sort = (filters[action.value.filterName].sort + 1) % 3;
            return Object.assign({}, state, {filters: filters})
        }
        case ("UPDATE_FILTER"): {
            let filters = state.filters;
            filters[action.value.filterName].filter = action.value.value;
            return Object.assign({}, state, {filters: filters})
        }
        case ("UPDATE_CURRENT_TICKET_FIELD"): {
            let ticket = state.currentTicket;
            ticket[action.value.fieldName] = action.value.value;
            return Object.assign({}, state, {currentTicket: ticket})
        }
        case ("UPDATE_CURRENT_TICKET"):{
            return Object.assign({}, state, {currentTicket: fromTicket(action.value.ticket)})
        }
        case ("CLEAR_CURRENT_TICKET"): {
            let ticket = state.currentTicket;
            for(let field in ticket){
                if (Object.prototype.hasOwnProperty.call(ticket, field)) {
                    ticket[field] = "";
                }
            }
            return Object.assign({}, state, {currentTicket: ticket})
        }
        case ("SET_ERROR"):{
            return Object.assign({}, state, {error: action.value.error})
        }
        case ("SET_MODE"):{
            return Object.assign({}, state, {mode: action.value.mode})
        }
        default: return state;
    }
}

export default mainReducer