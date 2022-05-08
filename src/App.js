import React from "react";
import { v4 as uuid } from 'uuid';

import './App.css';
import BestPosts from './components/BestPosts/BestPosts';
import Pool from "./components/Pool/Pool";
import postsdata from "./posts.json";
import { addAverageRate, getCurrentPosts, getSearchedPosts } from './utils';
import {postsPerPage} from "./config";


class App extends  React.Component {
    constructor(props){
        super(props)
        this.state = {
            posts : [],
            currentPage: 1,
            searchText: ''
        }
    }

    onChangePage = (pageNumber) => {
        this.setState({ currentPage: pageNumber }); 
    }

    componentDidMount() {        
        this.setState({ posts: postsdata });
    }

    onToggleDisablePost = (id) => {
        const updatedPosts = this.state.posts.map(post => {
            return (post.id === id) ? { ...post, disabled: !post.disabled } : post
        });
        this.setState({ posts: updatedPosts });
    }

    onSearch = (e) => {
        this.setState({ searchText: e.target.value });
    }

    onAddComment = (id, text) => {
        const updatedPosts = this.state.posts.map(post => {
            if (post.id === id) {
                const comments = [
                    ...post.comments,
                    {
                        id: uuid(),
                        comment_title: text,
                        comment_rate: 0
                    }
                ];
                return { ...post, comments };
            } else return post;
        });

        this.setState({ posts: updatedPosts });
    }

    onAddReply = (postId, commentId, reply) => {
        const updatedPosts = this.state.posts.map(post => {
            if (post.id === postId) {
                const updatedComments = post.comments.map(comment => {
                    if (comment.id === commentId) {
                        return { ...comment, reply: reply };
                    } else {
                        return comment;
                    }
                });

                return { ...post, comments: updatedComments };
            } else {
                return post;
            }
        });

        this.setState({ posts: updatedPosts });
    }

    render(){
        const postsWithAvarageRate = addAverageRate(this.state.posts);         
        const searchedPostsOrComments = getSearchedPosts(postsWithAvarageRate, this.state.searchText);
        const currentPosts = getCurrentPosts(this.state.currentPage, postsPerPage, searchedPostsOrComments);    

        return (
            <div className = "appContainer"> 
                <Pool 
                    posts = {currentPosts}                    
                    totalPostsQuantity = {searchedPostsOrComments.length}
                    currentPage = {this.state.currentPage}
                    onChangePage = {this.onChangePage}
                    searchText = {this.state.searchText}
                    onSearch = {this.onSearch}
                    onAddComment = {this.onAddComment}
                    onAddReply = {this.onAddReply}
                />               

                <div className = "bestPostContainer">          
                    <BestPosts  
                        posts = {currentPosts}                  
                        onToggleDisablePost ={this.onToggleDisablePost}
                    />
                    <BestPosts
                        posts = {currentPosts}                  
                        onToggleDisablePost ={this.onToggleDisablePost}
                    />  
                </div>       
            </div>
        );
    }
}

export default App;