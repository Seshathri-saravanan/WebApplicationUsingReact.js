import {useState} from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {  Button,Modal,ModalHeader,ModalBody,Label,Row, Col } from 'reactstrap';
import React from 'react';

const CommentForm = (props) => {
    const [isModalOpen,setModal] = useState(false);
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    const toggleModal = () => {setModal(!isModalOpen);}
    const handleSubmit = (values) => { toggleModal();
        alert('Current State is: ' + JSON.stringify(values));
        props.postComment(props.dishId, values.rating, values.Name, values.comment);
    }
    return(
        <div className="row-2 md-2">
            <Button outline onClick={toggleModal}>
                <span className="fa fa-pencil fa-lg">&nbsp;</span>
                Submit Comment
            </Button>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
            <hr/>
            <ModalBody className="ml-3 mr-3">
                <LocalForm onSubmit={(values) => handleSubmit(values)}>
                <Row className="form-group">
                    <Label htmlFor="rating">Rating</Label>
                    <Control.select className="select" model=".rating" id="rating" name="rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </Control.select>
                    
                </Row>
                <Row className="form-group">
                        <Label htmlFor="Name">Name</Label>
                        <Control.text model=".Name" id="Name" name="Name"
                            className="form-control"
                            placeholder="Your Name"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                            />
                        <Errors
                            className="text-danger"
                            model=".Name"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                        />
                </Row>
                <Row className="form-group">
                    <label htmlFor="comment">Comment</label>
                    <Control.textarea model=".comment" id="comment" name="comment"
                                className="commentbox"/>
                </Row>
                <Row className="form-group">
                    <Col md={{size:10, offset: 2}}>
                        <Button type="submit" color="primary">
                        submit
                        </Button>
                    </Col>
                </Row>
                </LocalForm>
            </ModalBody>
            </Modal>
        </div>
    );

}

export default CommentForm;