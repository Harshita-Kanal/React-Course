import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);

    }

   
   
    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
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

    renderComments(dish){
        if(dish != null){
        let comments = dish.comments.map( (comment) =>   {
            return(
                <ul class = "list-unstyled" key = {comment.id}>
                    <li class="list-item">{comment.comment}</li>
                <li class = "list-item">-- {comment.author} , {comment.date} </li>
                </ul>

            );

        })
        return (
            <div>
            <h4>Comments</h4>
            {comments}
            </div>
            );
    }
    else
    {
        return (<div></div>);
    } 
    }


    render() {

     
        
        return(
            <div className = "container">
            <div className = "row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
            <div className="col-12 col-md-5 m-1">
                {this.renderComments(this.props.dish)}
            </div>
        </div>
        </div>
        );

       
    }
}


export default DishDetail;