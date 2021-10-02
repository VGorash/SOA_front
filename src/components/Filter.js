import React from "react";
import {connect} from "react-redux";

class Filter extends React.Component{
    render() {
        return(
            <form>
                <div className="row">
                    <div className="col-auto">
                        <label className="form-label" htmlFor="id">ID</label>
                        <input type="number" id="id" className="form-control" value={this.props.filters.id.filter} onChange={(e)=>this.updateFilter(e, "id")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input type="text" id="name" className="form-control" value={this.props.filters.name.filter} onChange={(e)=>this.updateFilter(e, "name")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="x">X</label>
                        <input type="number" id="x" className="form-control" value={this.props.filters.x.filter} onChange={(e)=>this.updateFilter(e, "x")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="y">Y</label>
                        <input type="number" id="y" className="form-control" value={this.props.filters.y.filter} onChange={(e)=>this.updateFilter(e, "y")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="date">Date</label>
                        <input type="text" id="date" className="form-control" value={this.props.filters.date.filter} onChange={(e)=>this.updateFilter(e, "date")}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto">
                        <label className="form-label" htmlFor="price">Price</label>
                        <input type="number" id="price" className="form-control" value={this.props.filters.price.filter} onChange={(e)=>this.updateFilter(e, "price")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="comment">Comment</label>
                        <input type="text" id="comment" className="form-control" value={this.props.filters.comment.filter} onChange={(e)=>this.updateFilter(e, "comment")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="type">Type</label>
                        <input type="text" id="type" className="form-control" value={this.props.filters.type.filter} onChange={(e)=>this.updateFilter(e, "type")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="event">Event</label>
                        <input type="number" id="event" className="form-control" value={this.props.filters.event.filter} onChange={(e)=>this.updateFilter(e, "event")}/>
                    </div>
                    <div className="col-auto">
                        <br/>
                        <button type="button" className="btn btn-outline-primary" onClick={()=>this.applyChanges()}>Apply</button>
                    </div>
                </div>
            </form>
        )
    }
    updateFilter(e, name){
        this.props.dispatch({type: "UPDATE_FILTER", value:{filterName: name, value: e.target.value}})
    }
    applyChanges(){
        this.props.dispatch({type: "UPDATE_CURRENT_PAGE", value:{currentPage: 1}})
        this.props.dispatch({type: "LOAD_TICKETS", value:{}})
    }
}

const mapStateToProps = function(store) {
    return {
        filters: store.filters
    }
};

export default connect(mapStateToProps)(Filter);