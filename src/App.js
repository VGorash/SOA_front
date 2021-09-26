import './App.css';
import React from "react";
import MainTable from "./components/MainTable";
import Pagination from "./components/Pagination";
import {connect} from "react-redux";

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
                <MainTable store={this.props.store}/>
                <Pagination store={this.props.store}/>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        error: store.error,
    }
};

export default connect(mapStateToProps)(App);
