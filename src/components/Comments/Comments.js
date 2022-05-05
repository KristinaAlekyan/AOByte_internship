import React from 'react';

import "./comments.css";
import Comment from "../Comment/Comment";


class Comments extends React.Component {

    render() { 
        const {comments, postId} = this.props;
        return (
            <ul >
                {comments.map(comment => 
                    <Comment 
                        key = {comment.comment_id}
                        postId = {postId} 
                        comment ={comment}                
                    />
                )} 
            </ul>            
        )
    }
}
 
export default Comments;