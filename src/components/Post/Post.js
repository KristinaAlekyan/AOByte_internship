import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import "./post.css";
import Comments from "../Comments/Comments";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
    }
    addNewComment = (id, comment) => {
        this.props.addComment(id, comment);

        this.setState({
            comment: ''
        });
    }
    render() { 
        const {id, post_title, comments, disabled } = this.props.post;

        return (
            <li className = { disabled ? 'postContent disabled' : 'postContent'}>
                <div className ="m-1">{id}</div>
                <div className ="m-1">{post_title}</div>
        
                <div >
                    <Comments postId = {id} comments = {comments} />
                    
                    <input 
                        placeholder = "Write new comment..."
                        value = {this.state.comment}
                        onChange = {(e) => this.setState({ comment: e.target.value })}
                    />
                    <button
                        disabled={!this.state.comment}
                        onClick={() => this.addNewComment(id, this.state.comment)}
                    >Add </button>
                </div>
            </li>         
        )
    }
}
 
export default Post;