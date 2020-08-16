import { Card, CardImg, CardImgOverlay, CardText, CardBody, BreadcrumbItem, Breadcrumb, Button,Modal,ModalHeader,ModalBody,Form, FormGroup,Input,Label,
  CardTitle, FormFeedback,Row, Col } from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import CommentForm from "./CommentFormComponent";
import { Loading } from './LoadingComponent';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import {baseUrl} from '../shared/baseUrl';
function RenderComment({comments, postComment, dishId}){
  const Month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  if (comments != null){
    const commentsText = comments.map((comnt) =>{
      return(
      <Fade in>
        <li key={comnt.id}>
          <p className="text-left">{comnt.comment}</p>
          <p>&nbsp;&nbsp;--{comnt.author},<span>{Month[parseInt(comnt.date.substring(5,7))]}&nbsp;{comnt.date.substring(8,10)}&nbsp;,{comnt.date.substring(0,4)}</span></p>
        </li>
      </Fade>
      
      );
    }); 
  return(
      <React.Fragment>
        <div className="row-2 m-2">
          <div className="row-sm-2">
            <h3>Comments</h3>
          </div>
          <div className="row-sm-10 justify-center">
            <ul style={{}}>
              <Stagger in>
              {commentsText}
              </Stagger>
            </ul>
          </div>
        </div>
        <CommentForm dishId={dishId} postComment={postComment} />
      </React.Fragment>  
      
   );

  }
  else
    return(
        <div></div>
    );
}

function RenderDish({dish}) {
  if (dish != null) 
      return(
        <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
              <CardImg top src={ dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>  
        </FadeTransform>
          
      );
  else
      return(
          <div></div>
      );
}

const DishDetail = (props) => {
    if (props.isLoading) {
      return(
          <div className="container">
              <div className="row">            
                  <Loading />
              </div>
          </div>
      );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else 
      return(
          <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComment comments={props.comments} dishId={props.dish.id} postComment={props.postComment}/>
                </div>
            </div>
          </div>
      );
}
  

export default DishDetail;