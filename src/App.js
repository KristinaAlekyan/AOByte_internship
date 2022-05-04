import React from "react";

import './App.css';
import BestPosts from './components/BestPosts/BestPosts';
import Pool from "./components/Pool/Pool";
import postsdata from "./posts.json";
import { addAverageRate, getCurrentPosts, getSearchedPosts } from './utils';

class App extends  React.Component {
    constructor(props){
        super(props)
        this.state = {
            posts : [],
            currentPage: 1,
            postsPerPage: 5,
            searchText: ''
        }
    }

    changePage = (pageNumber) => {
        this.setState({ currentPage: pageNumber }); 
    }

    componentDidMount() {        
        this.setState({ posts: postsdata });
    }

    disablePost = (id) => {
        const updatedPosts = this.state.posts.map(post => {
            return (post.id === id) ? { ...post, disabled: !post.disabled } : post
        });
        this.setState({ posts: updatedPosts });
    }

    search = (e) => {
        this.setState({ searchText: e.target.value });
    }

    
    render(){
        const postsWithAvarageRate = addAverageRate(this.state.posts);
         
        const searchedPostsOrComments = getSearchedPosts(postsWithAvarageRate, this.state.searchText);
        const currentPosts = getCurrentPosts(
            this.state.currentPage,
            this.state.postsPerPage,
            searchedPostsOrComments
        );

        return (
            <div className = "appContainer"> 
                <Pool 
                    posts = {currentPosts}                    
                    totalPostsQuantity = {searchedPostsOrComments.length}
                    currentPage = {this.state.currentPage}
                    postsPerPage = {this.state.postsPerPage}
                    changePage = {this.changePage}
                    searchText = {this.state.searchText}
                    search = {this.search}

                />               

                <div className = "bestPostContainer">          
                    <BestPosts  
                        posts = {currentPosts}                  
                        disablePost ={this.disablePost}
                    />
                    <BestPosts
                        posts = {currentPosts}                  
                        disablePost ={this.disablePost}
                    />  
                </div>       
            </div>
        );
    }
}

export default App;