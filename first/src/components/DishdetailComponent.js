import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
 
 function RenderDish({dish}) {
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


  function RenderComments({dish}){
        if(dish != null){
        let comments = dish.comments.map( (comment) =>   {
            return(
                <ul class = "list-unstyled" key = {comment.id}>
                    <li class="list-item">{comment.comment}</li>
                    <li class="list-item">-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))} </li>
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


 const DishDetail = (props) => {
        
        return(
            <div className = "container">
            <div className = "row">
                <div className="col-12 col-md-5 m-1">
                   <RenderDish dish = {props.dish} />
                </div>
            <div className="col-12 col-md-5 m-1">
                   <RenderComments dish = {props.dish} />
            </div>
        </div>
        </div>
        );

       
    }



export default DishDetail;