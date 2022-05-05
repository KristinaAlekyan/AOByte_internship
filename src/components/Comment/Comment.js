import React from 'react';
import '../Comment/comment.css';

import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css';

class Comment extends React.Component {   
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() {         
    const {comment} = this.props;
        return (
            <ListGroup as = "ul" className="d-flex flex-row ">
                <ListGroup.Item as = "li" className = "d-flex flex-row ">         
                    <div className ="m-0.1">{comment.comment_title}</div>
                </ListGroup.Item>
                <ListGroup.Item as = "li" className = "d-flex flex-row ">
                    <div className = "m-0.1">{comment.comment_rate}</div>
                </ListGroup.Item>                
            </ListGroup>            
        )
    }
}
 
export default Comment;