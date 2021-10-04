import convert from "xml-js";

export function fromXML(xml){
    return convert.xml2js(xml, {compact: true})
}

export function toXML(ticket){
    let result = "";
    if(ticket.name) result+=`<name>${ticket.name}</name>`;
    if(ticket.price) result+=`<price>${ticket.price}</price>`;
    if(ticket.comment) result+=`<comment>${ticket.comment}</comment>`;
    if(ticket.type) result+=`<type>${ticket.type}</type>`;
    if(ticket.coords_x || ticket.coords_y){
        let coords = "";
        if(ticket.coords_x) coords+=`<x>${ticket.coords_x}</x>`
        if(ticket.coords_y) coords+=`<y>${ticket.coords_y}</y>`
        result+=`<coordinates>${coords}</coordinates>`
    }
    if(ticket.event_id || ticket.event_name || ticket.event_type || ticket.event_date){
        let event = "";
        if(ticket.event_id) event+=`<id>${ticket.event_id}</id>`
        if(ticket.event_name) event+=`<name>${ticket.event_name}</name>`
        if(ticket.event_type) event+=`<type>${ticket.event_type}</type>`
        if(ticket.event_date) event+=`<date>${ticket.event_date}</date>`
        result+=`<event>${event}</event>`
    }
    return `<ticket>${result}</ticket>`
}

export function fromTicket(ticket){
    return{
        id: ticket.id._text,
        name: ticket.name._text,
        coords_x: ticket.coordinates.x._text,
        coords_y: ticket.coordinates.y._text,
        date: ticket.creationDate._text,
        price: ticket.price ? ticket.price._text : "",
        comment: ticket.comment ? ticket.comment._text : "",
        type: ticket.type ? ticket.type._text : "",
        event_id: ticket.event ? ticket.event.id._text : "",
        event_name: ticket.event ? ticket.event.name._text : "",
        event_date: ticket.event && ticket.event.date ? ticket.event.date._text : "",
        event_type: ticket.event && ticket.event.type ? ticket.event.type._text : ""
    }
}