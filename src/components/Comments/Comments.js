import React from 'react';

import "./comments.css";
import Comment from "../Comment/Comment";


class Comments extends React.Component {
    render() { 
        const {comments, postId, onAddReply} = this.props;
        return (
            <ul >
                {comments.map(comment => 
                    <Comment 
                        key = {comment.id}
                        postId = {postId} 
                        comment = {comment} 
                        onAddReply = {onAddReply}               
                    />
                )} 
            </ul>            
        )
    }
}
 
export default Comments;