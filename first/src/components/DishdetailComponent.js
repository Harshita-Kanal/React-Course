import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, Label, CardText, Modal, ModalHeader, ModalBody, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Form, actions, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

 function RenderDish({dish}) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
            }


  function RenderComments({comments, addComment, dishId}){
        if(comments != null){
            console.log(comments)
       const renderComment = comments.map((comment) =>{  return(
                <div key={comment.id}>
                <ul class = "list-unstyled" >
                    <li class="list-item" >{comment.comment}</li>
                    <li class="list-item" >-- {comment.author}, {comment.date} </li>
                    {/* {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.date)))} */}
                </ul>
                </div>
         
            ); })

            return (
                <div>
                    {renderComment}
                    <CommentForm dishId={dishId} addComment={addComment} />                
                </div>
                );
        } 
    
    else
    {
        return (<div></div>);
    } 
  }


  class CommentForm extends Component{
      constructor(props){
          super(props)
          this.state = {
              isModalOpen: false
          }
          this.toggleModal = this.toggleModal.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      }

      toggleModal() {
          this.setState({
              isModalOpen: !this.state.isModalOpen
          });
      }

      handleSubmit(values) {
        //   console.log('Current State is: ' + JSON.stringify(values))
        alert('Current State is: ' + JSON.stringify(values))
          this.toggleModal()
          this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        //   this.props.resetFeedbackForm();
          // event.preventDefault()
      }

      render() {
          return(
              <div>
                  <Button outline onClick = {this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                  <Modal isOpen={this.state.isModalOpen}
                      toggle={this.toggleModal} >
                      <ModalHeader>Submit Comment</ModalHeader>
                      <ModalBody>
                          <div class= "container">
                              <LocalForm  onSubmit={(values) => this.handleSubmit(values)}>
                                  <Row className="form-group">                                     
                                      <Label htmlFor="rating">Rating</Label>
                                          <Control.select model=".rating" name="rating"
                                              className="form-control">
                                              <option>1</option>
                                              <option>2</option>
                                              <option>3</option>
                                              <option>4</option>
                                              <option>5</option>
                                          </Control.select>           
                                  </Row>

                                 <Row className="form-group">
                                      <Label htmlFor="name">Your Name</Label>
                                          <Control.text model=".name" id="name" name="name"
                                              placeholder="Your Name"
                                              className="form-control"
                                              validators={{
                                                  required, minLength: minLength(3), maxLength: maxLength(15)
                                              }}
                                          />
                                          <Errors
                                              className="text-danger"
                                              model=".name"
                                              show="touched"
                                              messages={{
                                                  required: `*Required `,
                                                  minLength: `*Must be greater than 2 characters `,
                                                  maxLength: `*Must be 15 characters or less `,

                                              }}
                                          />                                              
                                  </Row>

                                  <Row className="form-group">
                                      <Label htmlFor="Comment" >Comment</Label>                   
                                          <Control.textarea model=".comment" id="comment" name="comment"
                                              rows="6"
                                            className="form-control" />                                   
                                  </Row>
                                  <Row className="form-group">                                      
                                          <Button type="submit" color="primary">
                                              Submit
                                            </Button>                                      
                                  </Row>
                                  </LocalForm>                             
                          </div>
                      </ModalBody>
                  </Modal>  
              </div>
          );
      }    
    } 


 const DishDetail = (props) => {
     if (props.isLoading) {
         return (
             <div className="container">
                 <div className="row">
                     <Loading />
                 </div>
             </div>
         );
     }
     else if (props.errMess) {
         return (
             <div className="container">
                 <div className="row">
                     <h4>{props.errMess}</h4>
                 </div>
             </div>
         );
     }
     else if (props.dish != null) 
        return(
            <div className = "container">
            <div className = "row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to = "/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className = "col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className = "row">           
                <div className="col-12 col-md-5 m-1">
                   <RenderDish dish = {props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                        <RenderComments comments = {props.comments} addComment = {props.addComment} 
                        dishId = {props.dish.id}         
                        />
                      
                       
                </div>
            </div>
            </div>
        );

       
    }



export default DishDetail;