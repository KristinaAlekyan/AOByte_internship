import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css';

import '../Comment/comment.css';
import { getCommentColorByRate } from '../../utils';

class Comment extends React.Component {   
    constructor(props){
        super(props)
        this.state = {
            replyText: ""
        }
    }
    render() {         
        const {comment, postId, onAddReply} = this.props;
        return (
            <ListGroup as = "ul" className = "d-flex flex-row ">
                <ListGroup.Item as = "li" className = "d-flex flex-row ">         
                    <div className ="m-0.1">{comment.comment_title}</div>
                </ListGroup.Item>
                <ListGroup.Item as = "li" className = "d-flex flex-row ">
                    <button className = "m-0.1" style = {{backgroundColor: getCommentColorByRate(comment.comment_rate)}}>{comment.comment_rate}</button>
                </ListGroup.Item>   
                <div >
                    {comment.reply}
                </div>

                <div >
                    <input
                        type = "text"
                        value = {this.state.replyText}
                        placeholder = "Reply for comment "
                        onChange = {(e) => this.setState({ replyText: e.target.value })}
                    />
                    <button
                        type="button"
                        onClick = {() => {
                            onAddReply(postId, comment.id, this.state.replyText);
                            this.setState({replyText: ''});
                        }}
                    >
                        Reply
                    </button>
                </div>             
            </ListGroup>            
        )
    }
}
 
export default Comment;