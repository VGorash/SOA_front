import React from "react";
import {connect} from "react-redux";

class Pagination extends React.Component{

    render() {
        let totalPages = Math.ceil(this.props.totalTickets / this.props.pageSize);
        return(
            <form className="my-page-form">
                <div className="row">
                    <div className="col">
                        <label className="form-label" htmlFor="pageNum">Page number</label>
                        <input type="number" id="pageNum" className="form-control" value={this.props.currentPage} min="1" max={totalPages} onChange={(e)=>this.handlePageUpdate(e.target.value)}/>
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="typeNumber">Page size</label>
                        <input type="number" id="typeNumber" className="form-control number" value={this.props.pageSize} min="1" max={this.props.totalTickets} onChange={(e)=>this.handleSizeUpdate(e.target.value)}/>
                    </div>
                </div>
                <br/><button className="btn btn-outline-primary" type="button" onClick={()=>this.props.dispatch({type: "LOAD_TICKETS", value:{}})}>Apply</button>
            </form>
        )
    }

    handlePageUpdate(page){
        this.props.dispatch({type: "UPDATE_CURRENT_PAGE", value:{currentPage: page}})
    }

    handleSizeUpdate(size){
        this.props.dispatch({type: "UPDATE_PAGE_SIZE", value:{pageSize: size}})
    }
}


const mapStateToProps = function(store) {
    return {
        totalTickets: store.totalTickets,
        currentPage: store.currentPage,
        pageSize: store.pageSize
    }
};

export default connect(mapStateToProps)(Pagination);