import React from "react";
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'

class MainTable extends React.Component{

    constructor(props){
        super(props);
        this.props.dispatch({type: "LOAD_TICKETS", value:{}})
    }

    render(){
        let result = [];
        if(this.props.tickets){
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
        }
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID <FontAwesomeIcon icon={this.props.filters.id.sort===0 ? faSort : this.props.filters.id.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("id")}/></th>
                        <th scope="col">Name <FontAwesomeIcon icon={this.props.filters.name.sort===0 ? faSort : this.props.filters.name.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("name")}/></th>
                        <th scope="col">Coordinates <FontAwesomeIcon icon={this.props.filters.coordinates.sort===0 ? faSort : this.props.filters.coordinates.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("coordinates")}/></th>
                        <th scope="col">Creation Date <FontAwesomeIcon icon={this.props.filters.date.sort===0 ? faSort : this.props.filters.date.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("date")}/></th>
                        <th scope="col">Price <FontAwesomeIcon icon={this.props.filters.price.sort===0 ? faSort : this.props.filters.price.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("price")}/></th>
                        <th scope="col">Comment <FontAwesomeIcon icon={this.props.filters.comment.sort===0 ? faSort : this.props.filters.comment.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("comment")}/></th>
                        <th scope="col">Type <FontAwesomeIcon icon={this.props.filters.type.sort===0 ? faSort : this.props.filters.type.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("type")}/></th>
                        <th scope="col">Event <FontAwesomeIcon icon={this.props.filters.event.sort===0 ? faSort : this.props.filters.event.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("event")}/></th>
                    </tr>
                </thead>
                <tbody>{result}</tbody>
            </table>
        )
    }

    sort(filterName) {
        this.props.dispatch({type: "UPDATE_SORT", value:{filterName: filterName}})
        this.props.dispatch({type: "LOAD_TICKETS", value:{}})
    }
}

const mapStateToProps = function(store) {
    return {
        tickets: store.tickets,
        filters: store.filters
    }
};

export default connect(mapStateToProps)(MainTable);