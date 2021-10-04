import React from "react";
import {connect} from "react-redux";
import Modal from 'react-bootstrap/Modal'
import {Button, Col, Form, Row} from "react-bootstrap";

class EditWindow extends React.Component{
    render() {
        return(
            <Modal centered show={this.props.mode !== 0} onHide={()=>this.handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.mode === 2 ? "Add ticket" : `Modify ticket ${this.props.ticket.id}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={this.props.ticket.name} onChange={(e)=>this.handleChange(e, "name")}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" value={this.props.ticket.price} onChange={(e)=>this.handleChange(e, "price")}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Type</Form.Label>
                                    <Form.Control type="text" value={this.props.ticket.type} onChange={(e)=>this.handleChange(e, "type")}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control type="text" value={this.props.ticket.comment} onChange={(e)=>this.handleChange(e, "comment")}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>X coordinate</Form.Label>
                                    <Form.Control type="number" value={this.props.ticket.coords_x} onChange={(e)=>this.handleChange(e, "coords_x")}/>
                                </Form.Group>
                            </Col><Col>
                            <Form.Group>
                                <Form.Label>Y coordinate</Form.Label>
                                <Form.Control type="number" value={this.props.ticket.coords_y} onChange={(e)=>this.handleChange(e, "coords_y")}/>
                            </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Event ID</Form.Label>
                                    <Form.Control type="number" value={this.props.ticket.event_id} onChange={(e)=>this.handleChange(e, "event_id")}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Event name</Form.Label>
                                    <Form.Control type="text" value={this.props.ticket.event_name} onChange={(e)=>this.handleChange(e, "event_name")}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Event date</Form.Label>
                                    <Form.Control type="datetime-local" value={this.props.ticket.event_date} onChange={(e)=>{this.handleChange(e, "event_date")}}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Event type</Form.Label>
                                    <Form.Control type="text" value={this.props.ticket.event_type} onChange={(e)=>this.handleChange(e, "event_type")}/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={()=>this.handleClose()}>
                        Delete
                    </Button>
                    <Button variant="primary" onClick={()=>this.props.dispatch({type: "DELETE_TICKET"})}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
    handleClose(){
        this.props.dispatch({type: "SET_MODE", value:{mode: 0}})
    }
    handleSubmit(){
        if(this.props.mode === 1){
            this.props.dispatch({type: "UPDATE_TICKET"})
        }
        this.props.dispatch({type: "SET_MODE", value:{mode: 0}})
    }
    handleChange(e, field){
        let mode = this.props.mode;
        this.props.dispatch({type: "SET_MODE", value:{mode: 0}})
        this.props.dispatch({type: "UPDATE_CURRENT_TICKET_FIELD", value:{fieldName: field, value: e.target.value}});
        this.props.dispatch({type: "SET_MODE", value:{mode: mode}})
    }
}

const mapStateToProps = function(store) {
    return {
        mode: store.mode,
        ticket: store.currentTicket
    }
};

export default connect(mapStateToProps)(EditWindow);