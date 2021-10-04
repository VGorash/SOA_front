import './App.css';
import React from "react";
import MainTable from "./components/MainTable";
import Pagination from "./components/Pagination";
import {connect} from "react-redux";
import Filter from "./components/Filter";
import EditWindow from "./components/EditWindow";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="pb-2 mt-4 mb-2 border-bottom">
                    <h1>Лабораторная работа 1. Гораш В.И.</h1>
                </div>
                <div className="alert alert-danger" role="alert" hidden={!this.props.error}>
                    {this.props.error}
                </div>
                <EditWindow store={this.props.store}/>
                <Filter store={this.props.store}/><br/>
                <MainTable store={this.props.store}/>
                <button className="btn btn-success" onClick={()=>this.handleAdd()}>Add ticket</button>
                <Pagination store={this.props.store}/>
            </div>
        );
    }

    handleAdd(){
        this.props.dispatch({type: "CLEAR_CURRENT_TICKET"})
        this.props.dispatch({type: "SET_MODE", value:{mode: 2}})
    }
}

const mapStateToProps = function(store) {
    return {
        error: store.error,
    }
};

export default connect(mapStateToProps)(App);
