import React from "react";
import {connect} from "react-redux";

class MainTable extends React.Component{

    constructor(props){
        super(props);
        this.props.dispatch({type: "LOAD_TICKETS", value:{}})
    }

    render(){
        let result = [];
        for (let ticket of this.props.tickets){
            result.push(
                <tr onClick={()=>alert(ticket.id._text)}>
                    <td>{ticket.id._text}</td>
                    <td>{ticket.name._text}</td>
                    <td>x={ticket.coordinates.x._text}, y={ticket.coordinates.y._text}</td>
                    <td>{ticket.creationDate._text}</td>
                    <td>{ticket.price ? ticket.price._text : ""}</td>
                    <td>{ticket.comment ? ticket.comment._text : ""}</td>
                    <td>{ticket.type ? ticket.type._text : ""}</td>
                    <td>{ticket.event ? ticket.event.name._text : ""}</td>
                </tr>
            )
        }
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Coordinates</th>
                        <th scope="col">Creation Date</th>
                        <th scope="col">Price</th>
                        <th scope="col">Comment</th>
                        <th scope="col">Type</th>
                        <th scope="col">Event</th>
                    </tr>
                </thead>
                <tbody>{result}</tbody>
            </table>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        tickets: store.tickets,
    }
};

export default connect(mapStateToProps)(MainTable);